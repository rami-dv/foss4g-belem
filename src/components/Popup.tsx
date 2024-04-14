import { getPopupOffset } from "@/lib/map";
import { IconAnchorType } from "@/lib/types";
import { MapGeoJSONFeature } from "maplibre-gl";
import { Popup as MapPopup, SymbolLayer } from "react-map-gl/maplibre";

export default function Popup({
  feature,
  type,
}: {
  feature: MapGeoJSONFeature;
  type: "hover" | "select";
}) {
  const featLonLat = feature.geometry as GeoJSON.Point;
  const featLayout = (feature.layer as SymbolLayer).layout;

  let iconAnchor = (featLayout?.["icon-anchor"] as IconAnchorType) ?? "center";
  let iconSize = (featLayout?.["icon-size"] as number) * 100;

  // hacky way to account for hover being called before state updated and multiplier applied
  if (type == "hover" && feature?.["properties"]?.["hover"] == 0) {
    iconSize = iconSize * 1.2;
  }

  const padding = 6;
  const popupOffset = getPopupOffset({ iconAnchor, iconSize, padding });

  return (
    <MapPopup
      latitude={Number(featLonLat.coordinates[1])}
      longitude={Number(featLonLat.coordinates[0])}
      offset={popupOffset as any}
      maxWidth={undefined}
      closeButton={type === "select"}
      closeOnClick={false}
      className="cursor-default"
    >
      {feature.source == "lodging" && (
        <LodgingPopupContent type={type} properties={feature.properties} />
      )}
      {feature.source == "venues" && (
        <VenuePopupContent type={type} properties={feature.properties} />
      )}
    </MapPopup>
  );
}

function VenuePopupContent({
  type,
  properties,
}: {
  type: "hover" | "select";
  properties: GeoJSON.GeoJsonProperties;
}) {
  const isHover = type === "hover";

  return (
    <div className={"text-black -mx-1 -my-2 overflow-auto min-w-60"}>
      {properties?.["name"]}
    </div>
  );
}

function LodgingPopupContent({
  type,
  properties,
}: {
  type: "hover" | "select";
  properties: GeoJSON.GeoJsonProperties;
}) {
  const isHover = type === "hover";

  const Image = () => null;
  const NamePrice = () => (
    <div className="flex space-x-2 mb-1 flex-nowrap justify-center">
      <div className="items-center text-xl whitespace-nowrap">
        {properties?.["name"]}
      </div>
      <div className="flex items-center text-center leading-3 whitespace-nowrap">
        {properties?.["price"]}
        <br />
        /night
      </div>
    </div>
  );

  return isHover ? (
    <div className={"text-black -mx-1 -my-2 overflow-auto min-w-60"}>
      <Image />
      <NamePrice />

      <div className="text-center border-t pt-1 italic">
        (click for more information)
      </div>
    </div>
  ) : (
    <div className={"text-black -mx-1 -my-2 overflow-auto min-w-60"}>
      <Image />
      <NamePrice />
      <div className="">
        <div className="flex w-full justify-center bg-slate-200 rounded overflow-hidden">
          <a href={properties?.["website"]} target="_blank">
            website
          </a>
          <span className="mx-1">|</span>
          <a href={properties?.["booking"]} target="_blank">
            booking.com
          </a>
          <span className="mx-1">|</span>
          <a href={`tel:${properties?.["phone"]}`} target="_blank">
            phone
          </a>
        </div>
      </div>
      <div className="pt-1">{properties?.["description"]}</div>
    </div>
  );
}
