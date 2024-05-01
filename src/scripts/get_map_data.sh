##
## config
##

## belém AOI
minY="-1.8"; maxY="-1.04"; minX="-48.8"; maxX="-48.04";

protomaps_release="20240422"
overture_release="2024-02-15-alpha.0"

protomaps_path="../../public/map/tiles/protomaps.pmtiles"
overture_path="../../public/map/tiles/overture.pmtiles"
worldcover_path="../../public/map/tiles/worldcover.pmtiles"

osm_path="../data/osm.json"
places_path="../data/places.json"


##
## worldcover
##

if [ ! -f "${worldcover_path}" ]; then
    # create cutline
    echo -e "id,WKT\n1,\"POLYGON ((${minX} ${minY}, ${minX} ${maxY}, ${maxX} ${maxY}, ${maxX} ${minY}, ${minX} ${minY}))\"" > cutline.csv
    
    # aws don't sign request to download esa data w/o auth
    export AWS_NO_SIGN_REQUEST=YES

    ## stream from aws and crop
    gdalwarp \
        -co COMPRESS=LZW \
        -cutline cutline.csv \
        -crop_to_cutline \
        /vsis3/esa-worldcover/v200/2021/map/ESA_WorldCover_10m_2021_v200_S03W051_Map.tif \
        worldcover-orig.tif

    ## process
    sieves=("5120" "1280" "320" "80" "20")
    zooms=("8" "9" "10" "11" "12")

    for ((i=0; i<5; i++))
    do
        sieve=${sieves[$i]}
        zoom=${zooms[$i]}

        echo "building zoom ${zoom}"

        gdal_sieve.py \
            -st ${sieve} \
            -co COMPRESS=LZW \
            worldcover-orig.tif \
            worldcover-${zoom}-sieve.tif

        gdal_polygonize.py \
            -f "GeoJSONSeq" \
            worldcover-${zoom}-sieve.tif \
            worldcover-${zoom}.geojsonl \
            "worldcover" \
            "class"

        tippecanoe \
            --force \
            --minimum-zoom=${zoom} \
            --maximum-zoom=${zoom} \
            --detect-shared-borders \
            --simplification=1 \
            --visvalingam \
            --read-parallel \
            --layer=worldcover \
            --output="worldcover-${zoom}.pmtiles" \
            worldcover-${zoom}.geojsonl
    done

    tile-join --force --output="${worldcover_path}" worldcover-*.pmtiles
    rm -rf cutline.csv worldcover-orig.tif worldcover-*-sieve.tif worldcover-*.geojsonl 
fi



##
## protomaps osm extract
##

if [ ! -f "${protomaps_path}" ]; then
    pmtiles extract \
        --bbox="${minX},${minY},${maxX},${maxY}" \
        --maxzoom=14 \
        "https://build.protomaps.com/${protomaps_release}.pmtiles" \
        ${protomaps_path}
fi

##
## overture 
##

if [ ! -f "${overture_path}" ]; then

    ## buildings
    echo "
    LOAD spatial;

    COPY (
        SELECT
            ST_GeomFromWKB(geometry) as geometry
        FROM
            read_parquet('s3://overturemaps-us-west-2/release/${overture_release}/theme=buildings/type=*/*', hive_partitioning=1)
        WHERE
            bbox.minY > ${minY} AND bbox.maxY < ${maxY} AND bbox.minX > ${minX} AND bbox.maxX < ${maxX}
    ) TO 'buildings.geojsonl'
    WITH (FORMAT GDAL, DRIVER 'GeoJSONSeq');" | duckdb

    tippecanoe \
        --minimum-zoom=8 \
        --maximum-zoom=14 \
        --read-parallel \
        --drop-smallest-as-needed \
        --maximum-tile-bytes=300000 \
        --output=${overture_path}.pmtiles \
        buildings.geojsonl 

    ## places
    echo "
    LOAD spatial;

    COPY (
        SELECT 
            names->>'$.primary' as name,
            addresses->>0->>'$.freeform' AS address,
            phones->>0 AS phone,
            websites->>0 AS website,
            socials->>0 AS social,
            categories->>'$.main' as category,
            confidence,
            ST_GeomFromWKB(geometry) as geometry
        FROM
            read_parquet('s3://overturemaps-us-west-2/release/${overture_release}/theme=places/type=*/*', hive_partitioning=1)
        WHERE 
            bbox.minY > ${minY} AND bbox.maxY < ${maxY} AND bbox.minX > ${minX} AND bbox.maxX < ${maxX}
            AND
            (categories ->> '$.main') IN ('hotel', 'hostel', 'bed_and_breakfast', 'motel', 'guest_house')
            AND
            confidence > 0.6
        ORDER BY name ASC
    ) TO '${places_path}'
    WITH (FORMAT GDAL, DRIVER 'GeoJSON');" | duckdb

    
## places
    echo "
    LOAD spatial;

    COPY (
        SELECT 
            names->>'$.primary' as name,
            addresses->>0->>'$.freeform' AS address,
            phones->>0 AS phone,
            websites->>0 AS website,
            socials->>0 AS social,
            categories->>'$.main' as category,
            confidence,
            ST_GeomFromWKB(geometry) as geometry
        FROM
            read_parquet('s3://overturemaps-us-west-2/release/${overture_release}/theme=places/type=*/*', hive_partitioning=1)
        WHERE 
            bbox.minY > ${minY} AND bbox.maxY < ${maxY} AND bbox.minX > ${minX} AND bbox.maxX < ${maxX}
            AND
            (categories ->> '$.main') IN ('hotel', 'hostel', 'bed_and_breakfast', 'motel', 'guest_house', 'restaurant', 'bar')
            AND
            confidence > 0.6
        ORDER BY name ASC
    ) TO '${places_path}'
    WITH (FORMAT GDAL, DRIVER 'GeoJSON');" | duckdb
fi

##
## osm
##

if [ ! -f "${osm_path}" ]; then

    echo "[out:json][bbox:${minY},${minX},${maxY},${maxX}];
    (
        nwr[name=\"Estação das Docas\"];
        nwr[name=\"Forte do Castelo\"];
    );
    out center;" | curl -d @- -X POST http://overpass-api.de/api/interpreter > ${osm_path}

    #rm query.tmp
fi