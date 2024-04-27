import { useEffect, useState, useRef } from "react";
import GlobeImage from "@/images/earth-blue-marble.jpg";
import Airports from "@/data/airports.json";
import dynamic from "next/dynamic";

const GlobeGl = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  { ssr: false }
);

// https://github.com/vasturiano/react-globe.gl/blob/master/example/airline-routes/us-international-outbound.html

type LonLat = [number, number];
type Route = {
  srcAirport: LonLat;
  dstAirport: LonLat;
};

export default function IndexPage() {
  // @ts-ignore
  const globeRef = useRef<GlobeGl>();

  const belem = Airports.features.find(
    (feat) => feat.properties["code"] == "BEL"
  );

  const airports = Airports.features.filter(
    (feat) => feat.properties["code"] != "BEL"
  );

  const routes = airports.map((airport) => ({
    srcAirport: airport["geometry"]["coordinates"],
    // @ts-ignore
    dstAirport: belem["geometry"]["coordinates"],
  }));

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    globeRef.current?.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
  }, []);

  return (
    <div className="w-1/2">
      <GlobeGl
        height="100%"
        globeImageUrl={GlobeImage.src}
        arcsData={routes}
        // @ts-ignore
        arcStartLat={(d) => +d.srcAirport[1]}
        // @ts-ignore
        arcStartLng={(d) => +d.srcAirport[0]}
        // @ts-ignore
        arcEndLat={(d) => +d.dstAirport[1]}
        // @ts-ignore
        arcEndLng={(d) => +d.dstAirport[0]}
        // arcDashLength={1}
        // arcDashGap={0.6}
        // arcDashInitialGap={() => Math.random()}
        // arcDashAnimateTime={1000}
        // arcColor={d => [`rgba(0, 255, 0, 1)`, `rgba(255, 0, 0,1)`]}
        // arcsTransitionDuration={0}
      />
    </div>
  );
}
