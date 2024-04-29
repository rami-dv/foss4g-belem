import {
  ExpressionSpecification,
  MapGeoJSONFeature,
  StyleSpecification,
} from "maplibre-gl";
import { MapRef } from "react-map-gl/maplibre";
import { NamedFeatureCollection } from "@/lib/types";
import MapLibreMap, { isSameFeature, applyFeatureStates } from "@/lib/map";
import Popup from "@/components/Popup";

import venuesGeoJson from "@/data/venues.json";
import placesGeoJson from "@/data/places.json";
import bairrosGeoJson from "@/data/bairros.json";

import { useState, useContext, useRef, useMemo } from "react";

import "maplibre-gl/dist/maplibre-gl.css";
import { useRouter } from "next/router";

import Head from "next/head";

export default function Map() {
  const router = useRouter();
  const mapRef = useRef<MapRef>(null);

  const [cursor, setCursor] = useState<string>("auto");

  const [hoveredFeature, setHoveredFeature] =
    useState<MapGeoJSONFeature | null>(null);
  const [selectedFeature, setSelectedFeature] =
    useState<MapGeoJSONFeature | null>(null);

  const mapStyle = useMemo(
    () => getMapStyle({ hoveredFeature, selectedFeature }),
    [hoveredFeature, selectedFeature]
  );

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0">
      <Head>
        <title>Map</title>
      </Head>
      <MapLibreMap
        ref={mapRef}
        minZoom={2}
        maxZoom={20}
        initialViewState={{
          bounds: [-48.508521, -1.481578, -48.437068, -1.410125],
        }}
        cursor={cursor}
        onMouseMove={(e) => {
          if (!mapRef.current) return;

          const mouseoverFeat = mapRef.current
            .queryRenderedFeatures(e.point, {
              layers: ["venues", "places"],
            })?.[0]
            ?.toJSON();

          setCursor(mouseoverFeat ? "pointer" : "auto");

          if (
            !isSameFeature(mouseoverFeat, hoveredFeature) &&
            !isSameFeature(mouseoverFeat, selectedFeature)
          )
            setHoveredFeature(mouseoverFeat ? mouseoverFeat : null);
        }}
        onMouseUp={(e) => {
          if (!mapRef.current) return;

          const clickedFeat = mapRef.current
            .queryRenderedFeatures(e.point, {
              layers: ["venues", "places"],
            })?.[0]
            ?.toJSON();

          if (isSameFeature(clickedFeat, hoveredFeature))
            setHoveredFeature(null);
          setSelectedFeature(clickedFeat);
        }}
        transformRequest={(url: string) => {
          // transform fake sprite url in style to work on both dev and prod

          const baseUrl = `${window.location.host}${router.basePath ?? "/"}`;

          const newUrl = url.replace(
            "http://{basePath}",
            `${window.location.protocol}//${baseUrl}`
          );

          return { url: newUrl };
        }}
        mapStyle={mapStyle}
      >
        {hoveredFeature && <Popup type="hover" feature={hoveredFeature} />}
        {selectedFeature && <Popup type="select" feature={selectedFeature} />}
      </MapLibreMap>
    </div>
  );
}

const getMapStyle = ({
  hoveredFeature,
  selectedFeature,
}: {
  hoveredFeature: MapGeoJSONFeature | null;
  selectedFeature: MapGeoJSONFeature | null;
}): StyleSpecification => {
  const featureState = {
    hover: hoveredFeature,
    select: selectedFeature,
  };

  return {
    version: 8,
    glyphs: "http://{basePath}/map/glyphs/{fontstack}/{range}.pbf",
    sprite: "http://{basePath}/map/sprite",
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
      },
      protomaps: {
        type: "vector",
        attribution:
          '<a href="https://github.com/protomaps/basemaps">Protomaps</a> | <a href="https://openstreetmap.org">OpenStreetMap</a>',
        url: "pmtiles://http://{basePath}/map/tiles/protomaps.pmtiles",
        minzoom: 9,
      },
      overture: {
        type: "vector",
        url: "pmtiles://http://{basePath}/map/tiles/overture.pmtiles",
        minzoom: 8,
        maxzoom: 14,
      },
      worldcover: {
        type: "vector",
        url: "pmtiles://http://{basePath}/map/tiles/worldcover.pmtiles",
        attribution: "© ESA WorldCover 2021",
        minzoom: 8,
        maxzoom: 12,
      },
      venues: {
        type: "geojson",
        data: applyFeatureStates(
          venuesGeoJson as NamedFeatureCollection,
          featureState
        ),
      },
      places: {
        type: "geojson",
        data: applyFeatureStates(
          placesGeoJson as NamedFeatureCollection,
          featureState
        ),
      },
      bairros: {
        type: "geojson",
        data: bairrosGeoJson as NamedFeatureCollection,
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: {
          "background-color": "#cccccc",
        },
      },
      {
        id: "osm",
        type: "raster",
        source: "osm",
        maxzoom: 11,
      },
      {
        id: "earth",
        type: "fill",
        source: "protomaps",
        "source-layer": "earth",
        paint: {
          "fill-color": "#e0e0e0",
        },
      },
      {
        id: "worldcover",
        type: "fill",
        source: "worldcover",
        "source-layer": "worldcover",
        paint: {
          "fill-color": [
            "match",
            ["get", "class"],
            [10],
            "rgb(100, 124, 70)", // tree
            [20],
            "rgb(150, 152, 70)", // shrub
            [30],
            "rgb(248, 229, 157)", // grassland
            [40],
            "rgb(153, 138, 93)", // cropland
            [50],
            "rgb(214, 216, 202)", // built up
            [60],
            "rgb(241, 244, 255)", // bare
            [70],
            "rgb(190, 218, 255)", // snow and ice
            [80],
            "#80deea", // water
            [90],
            "rgb(126, 201, 162)", // wetland
            [95],
            "rgb(126, 201, 162)", // mangroves
            [100],
            "rgb(252, 229, 157)", // moss
            "#80deea",
          ],
        },
      },
      {
        id: "bairros-fill",
        type: "fill",
        source: "bairros",
        minzoom: 12,
        paint: {
          "fill-color": "#d86e39",
          "fill-opacity": 0.3,
        },
      },
      {
        id: "landuse_aerodrome",
        type: "fill",
        source: "protomaps",
        "source-layer": "landuse",
        filter: ["any", ["in", "pmap:kind", "aerodrome"]],
        paint: {
          "fill-color": "#dadbdf",
        },
      },
      {
        id: "transit_runway",
        type: "line",
        source: "protomaps",
        "source-layer": "transit",
        filter: ["any", ["in", "pmap:kind_detail", "runway"]],
        paint: {
          "line-color": "#e9e9ed",
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            10,
            0,
            12,
            4,
            18,
            30,
          ],
        },
      },
      {
        id: "water",
        type: "fill",
        source: "protomaps",
        "source-layer": "water",
        paint: {
          "fill-color": "#80deea",
        },
      },
      {
        id: "buildings",
        type: "fill",
        source: "overture",
        "source-layer": "buildings",
        minzoom: 14,
        maxzoom: 20,
        paint: {
          "fill-color": "#cccccc",
          "fill-opacity": 1,
        },
      },
      {
        id: "roads_other",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: ["all", ["in", "pmap:kind", "other", "path"]],
        paint: {
          "line-color": "#ebebeb",
          "line-dasharray": [3, 1],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            14,
            0,
            20,
            7,
          ],
        },
      },
      {
        id: "roads_link",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: ["all", ["==", "pmap:link", 1]],
        paint: {
          "line-color": "#ffffff",
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            13.5,
            1,
            18,
            11,
          ],
        },
      },
      {
        id: "roads_minor_service",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:kind", "minor_road"],
          ["==", "pmap:kind_detail", "service"],
        ],
        paint: {
          "line-color": "#ebebeb",
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            13,
            0,
            18,
            8,
          ],
        },
      },
      {
        id: "roads_minor",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: [
          "all",
          ["==", "pmap:kind", "minor_road"],
          ["!=", "pmap:kind_detail", "service"],
        ],
        paint: {
          "line-color": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            "#ebebeb",
            16,
            "#ffffff",
          ],
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            11,
            0,
            12.5,
            0.5,
            15,
            2,
            18,
            11,
          ],
        },
      },
      {
        id: "roads_medium",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: ["all", ["==", "pmap:kind", "medium_road"]],
        paint: {
          "line-color": "#f5f5f5",
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            7,
            0,
            12,
            1.2,
            15,
            3,
            18,
            13,
          ],
        },
      },
      {
        id: "roads_major",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: ["all", ["==", "pmap:kind", "major_road"]],
        paint: {
          "line-color": "#ffffff",
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            6,
            0,
            12,
            1.6,
            15,
            3,
            18,
            13,
          ],
        },
      },
      {
        id: "roads_highway",
        type: "line",
        source: "protomaps",
        "source-layer": "roads",
        filter: ["all", ["==", "pmap:kind", "highway"], ["!=", "pmap:link", 1]],
        paint: {
          "line-color": "#ffffff",
          "line-width": [
            "interpolate",
            ["exponential", 1.6],
            ["zoom"],
            3,
            0,
            6,
            1.1,
            12,
            1.6,
            15,
            5,
            18,
            15,
          ],
        },
      },

      {
        id: "bairros-border",
        type: "line",
        source: "bairros",
        minzoom: 12,
        paint: {
          "line-color": "#d86e39",
          "line-opacity": 0.8,
          "line-width": 1.5,
        },
      },
      {
        id: "roads_labels_major",
        type: "symbol",
        source: "protomaps",
        "source-layer": "roads",
        minzoom: 14.5,
        filter: [
          "any",
          ["in", "pmap:kind", "highway", "major_road", "medium_road"],
        ],
        layout: {
          "symbol-sort-key": ["get", "pmap:min_zoom"],
          "symbol-placement": "line",
          "text-font": ["Noto Sans Regular"],
          "text-field": ["get", "name"],
          "text-size": 12,
        },
        paint: {
          "text-color": "#938a8d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 2,
        },
      },
      {
        id: "places",
        type: "symbol",
        source: "places",
        minzoom: 13,
        layout: {
          "symbol-sort-key": ["-", 1, ["get", "confidence"]],
          "icon-image": "{category}",
          "icon-size": [
            "let",
            "multiplier",
            [
              "case",
              [
                "any",
                ["==", ["get", "hover"], 1],
                ["==", ["get", "select"], 1],
              ],
              1.2,
              1,
            ],
            [
              "interpolate",
              ["linear"],
              ["zoom"],
              12,
              ["*", ["var", "multiplier"], 0.1],
              13,
              ["*", ["var", "multiplier"], 0.12],
              14,
              ["*", ["var", "multiplier"], 0.15],
            ],
          ],
          "text-anchor": "left",
          "text-offset": [1.2, 0],
          "text-max-width": 100,
          "text-field": [
            "step",
            ["zoom"],
            "",
            15,
            ["case", ["==", ["get", "category"], "hotel"], ["get", "name"], ""],
          ],
          "text-font": ["literal", ["Noto Sans SemiCondensed Regular"]],
          "text-size": [
            "let",
            "multiplier",
            [
              "case",
              [
                "any",
                ["==", ["get", "hover"], 1],
                ["==", ["get", "select"], 1],
              ],
              1.2,
              1,
            ],
            [
              "interpolate",
              ["linear"],
              ["zoom"],
              12,
              ["*", ["var", "multiplier"], 7],
              13,
              ["*", ["var", "multiplier"], 10],
              14,
              ["*", ["var", "multiplier"], 12],
            ],
          ],
        },
        paint: {
          "text-halo-width": 1,
          "text-halo-blur": 0.5,
          "text-halo-color": "rgba(255,255,255,0.8)",
          "icon-opacity": [
            "interpolate",
            ["exponential", 1],
            ["zoom"],
            13,
            0,
            13.5,
            1,
          ],
        },
      },
      {
        id: "bairros-labels",
        type: "symbol",
        source: "protomaps",
        "source-layer": "places",
        minzoom: 12,
        layout: {
          "text-font": ["literal", ["Noto Sans SemiCondensed Regular"]],
          "text-field": ["get", "name"],
          "text-size": 14,
        },
        paint: {
          "text-color": "#552f27",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
          "text-halo-blur": 0.5,
        },
        filter: [
          "in",
          "name",
          "Cidade Velha",
          "Campina",
          "Umarizal",
          "Batista Campos",
          "Marco",
        ],
      },
      {
        id: "venues",
        type: "symbol",
        source: "venues",
        minzoom: 12,
        layout: {
          "text-allow-overlap": true,
          "text-font": ["literal", ["Noto Sans SemiCondensed Regular"]],
          "text-anchor": "top",
          // "text-offset": [
          //   "let",
          //   "multiplier",
          //   [
          //     "case",
          //     [
          //       "any",
          //       ["==", ["get", "hover"], 1],
          //       ["==", ["get", "select"], 1],
          //     ],
          //     1.2,
          //     1,
          //   ],
          //   "let",
          //   "icon-base",
          //   [
          //     "interpolate",
          //     ["linear"],
          //     ["zoom"],
          //     12,
          //     ["*", ["var", "multiplier"], 0.4],
          //     13,
          //     ["*", ["var", "multiplier"], 0.5],
          //     14,
          //     ["*", ["var", "multiplier"], 0.6],
          //   ],
          //   ["array", "number", 0, ["get", "icon-base"]]
          // ],
          "text-field": [
            "step",
            ["zoom"],
            "",
            11,
            [
              "format",
              ["get", "label"],
              {
                "font-scale": 1.7,
                "text-font": ["literal", ["Noto Sans Regular"]],
              } as unknown as ExpressionSpecification,
            ],
            13,
            [
              "format",
              ["get", "label"],
              {
                "font-scale": 1.7,
                "text-font": ["literal", ["Noto Sans Regular"]],
              } as unknown as ExpressionSpecification,
              "\n",
              { "font-scale": 1 },
              ["get", "sublabel"],
              { "font-scale": 1.15 },
            ],
          ],
          "text-max-width": 100,
          "text-size": [
            "let",
            "multiplier",
            [
              "case",
              [
                "any",
                ["==", ["get", "hover"], 1],
                ["==", ["get", "select"], 1],
              ],
              1.2,
              1,
            ],
            [
              "interpolate",
              ["linear"],
              ["zoom"],
              12,
              ["*", ["var", "multiplier"], 7],
              13,
              ["*", ["var", "multiplier"], 8],
              14,
              ["*", ["var", "multiplier"], 9],
            ],
          ],
          "icon-allow-overlap": true,
          "icon-image": ["get", "icon"],
          "icon-anchor": "bottom",
          "icon-size": [
            "let",
            "multiplier",
            [
              "case",
              [
                "any",
                ["==", ["get", "hover"], 1],
                ["==", ["get", "select"], 1],
              ],
              1.2,
              1,
            ],
            [
              "interpolate",
              ["linear"],
              ["zoom"],
              12,
              ["*", ["var", "multiplier"], 0.4],
              13,
              ["*", ["var", "multiplier"], 0.5],
              14,
              ["*", ["var", "multiplier"], 0.6],
            ],
          ],
        },
        paint: {
          "text-halo-width": 2,
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
        },
      },
      {
        id: "attractions",
        type: "symbol",
        source: "protomaps",
        "source-layer": "pois",
        minzoom: 12,
        layout: {
          "icon-image": "star",
          "icon-size": 0.2,
          "text-field": ["get", "name"],
          "text-font": ["literal", ["Noto Sans SemiCondensed Regular"]],
          "text-size": 12,
          "text-offset": [0, 1],
          "text-anchor": "top",
        },
        paint: {
          "text-halo-width": 2,
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
        },
        filter: [
          "in",
          "name",
          "Mercado Ver-o-Peso",
          "Estação das Docas",
          "Casa das Onze Janelas",
          "Forte do Castelo",
          "Praça da República",
          "Praça Dom Pedro 2",
          "Centro Histórico de Belém"
        ],
      },
      {
        id: "airport",
        type: "symbol",
        source: "protomaps",
        "source-layer": "pois",
        layout: {
          "icon-image": "airport",
          "icon-size": 0.2,
          "text-field": "Belém International Airport",
          "text-font": ["literal", ["Noto Sans SemiCondensed Regular"]],
          "text-size": 12,
          "text-offset": [0, 1],
          "text-anchor": "top",
        },
        paint: {
          "text-halo-width": 2,
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.8)",
        },
        filter: ["==", "iata", "BEL"],
      },
    ],
  };
};
