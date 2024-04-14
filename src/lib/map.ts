import MapLibreMap from "react-map-gl/maplibre";
import MapLibreGL_, { MapGeoJSONFeature } from "maplibre-gl";
import { Protocol } from "pmtiles";
import { FeatureStates, IconAnchorType, NamedFeatureCollection } from "./types";

MapLibreGL_.addProtocol("pmtiles", new Protocol().tile);

export const isSameFeature = (
  feat0: MapGeoJSONFeature | null,
  feat1: MapGeoJSONFeature | null
): boolean => {
  // both null
  if (!feat0 && !feat1) return false;
  // one null
  else if ((!feat0 && feat1) || (feat0 && !feat1)) return false;
  else return feat0?.id == feat1?.id && feat0?.source == feat1?.source;
};

export const getPopupOffset = ({
  iconAnchor,
  iconSize,
  padding,
}: {
  iconAnchor: IconAnchorType;
  iconSize: number;
  padding: number;
}) => {
  const iconCenter = {
    center: [0, 0],
    left: [-iconSize / 2, 0],
    right: [iconSize / 2, 0],
    bottom: [0, -iconSize / 2],
    top: [0, iconSize / 2],
  };

  let popupOffset: { [position: string]: [number, number] } = {
    left: [
      iconCenter[iconAnchor][0] + iconSize / 2 + padding,
      iconCenter[iconAnchor][1],
    ],
    right: [
      iconCenter[iconAnchor][0] - iconSize / 2 - padding,
      iconCenter[iconAnchor][1],
    ],
    top: [
      iconCenter[iconAnchor][0],
      iconCenter[iconAnchor][1] + iconSize / 2 + padding,
    ],
    bottom: [
      iconCenter[iconAnchor][0],
      iconCenter[iconAnchor][1] - iconSize / 2 - padding,
    ],
  };

  for (let combo of [
    ["bottom", "left"],
    ["bottom", "right"],
    ["top", "left"],
    ["top", "right"],
  ]) {
    popupOffset[`${combo[0]}-${combo[1]}`] = [
      popupOffset[combo[0]][0] + popupOffset[combo[1]][0],
      popupOffset[combo[0]][1] + popupOffset[combo[1]][1],
    ];
  }

  return popupOffset
};

export const applyFeatureStates = (
  nfc: NamedFeatureCollection,
  featureStates: FeatureStates
): NamedFeatureCollection => {
  const nfcCopy = structuredClone(nfc);
  const nfcId = nfcCopy.name;

  for (let i = 0; i < nfcCopy.features.length; i++) {
    let feat = nfcCopy.features[i];

    feat["id"] = i;

    for (const [featStateName, featState] of Object.entries(featureStates)) {
      if (featState?.source == nfcId && featState?.id == i) {
        feat.properties = {
          ...feat.properties,
          ...{
            [featStateName]: 1,
          },
        };
      } else {
        feat.properties = {
          ...feat.properties,
          ...{
            [featStateName]: 0,
          },
        };
      }
    }
  }
  return nfcCopy;
};

export default MapLibreMap;
