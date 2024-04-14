import { MapGeoJSONFeature } from "maplibre-gl";

export type IconAnchorType = "center" | "left" | "right" | "bottom" | "top";

export type NamedFeatureCollection = GeoJSON.FeatureCollection & {
  name: string;
};

export type FeatureStates = {
  [stateName: string]: MapGeoJSONFeature | null;
};