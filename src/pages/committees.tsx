import Committees from "@/data/committees.json";
import Image from "next/image";
import CommitteeImage from "@/images/committee.jpg";

function PersonBubble({ name }: { name: string }) {
  return <div>{name}</div>;
}

function slugify(str: string) {
  return str
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "-");
}

function CommitteeHeader({
  label,
  color,
}: {
  label: string;
  color: "green" | "orange" | "red";
}) {
  // doing it this way for the tailwind jit compiler
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const borders = {
    green: "border-f4g_green",
    red: "border-f4g_red",
    orange: "border-f4g_orange",
    blue: "border-f4g_blue",
  };
  const text = {
    green: "text-f4g_green",
    red: "text-f4g_red",
    orange: "text-f4g_orange",
    blue: "text-f4g_blue",
  };

  return (
    <div className="flex items-center my-6 sm:my-8">
      <div className={`flex-1 border-t-2 ${borders[color]}`}></div>
      <div
        className={`text-2xl sm:text-4xl text-center font-bold font-ubuntu ${text[color]} px-2 sm:px-8`}
      >
        {label}
      </div>
      <div className={`flex-1 border-t-2 ${borders[color]}`}></div>
    </div>
  );
}

export default function CommitteesPage() {
  return (
    <main className="sm:mx-auto max-w-6xl mx-2 my-2 sm:my-4">
      <CommitteeHeader label="Conference Committees" color="red" />
      <div className="grid grid-cols-2">
        <div className="flex-grow">
          <Image alt="Conference Committee" src={CommitteeImage} />
        </div>
        <div className="flex-shrink">
          Brazil has made significant contributions to various open source
          geospatial software projects. Some examples include the development of
          OSGeo-based tools such as QGIS, GRASS GIS, GeoServer and others. In
          addition, the Brazilian community has actively participated in the
          translation of documentation and the organization of events related to
          OSGeo. To learn more about Brazil's experience with OSGeo, we invite
          you to visit our wiki.
        </div>
      </div>

      <CommitteeHeader label="Local Committee" color="red" />
      <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
        {Committees["loc"].map((name) => (
          <div key={name}>
            <div className="rounded-full hover:cursor-default border-4 border-f4g_red overflow-hidden m-1 sm:m-2">
              <img src={`images/committees/loc/${slugify(name)}.jpg`} />
            </div>
            <div className="text-ubuntu text-center">{name}</div>
          </div>
        ))}
      </div>

      <CommitteeHeader label="Academic Committee" color="orange" />
      <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
        {Committees["academic"].map((name) => (
          <div key={name}>
            <div className="rounded-full hover:cursor-default border-4 border-f4g_orange overflow-hidden m-1 sm:m-2">
              <img src={`images/committees/academic/${slugify(name)}.jpg`} />
            </div>
            <div className="text-ubuntu text-center">{name}</div>
          </div>
        ))}
      </div>

      <CommitteeHeader label="Program Committee" color="green" />
      <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
        {Committees["program"].map((name) => (
          <div key={name}>
            <div className="rounded-full hover:cursor-default border-4 border-f4g_green overflow-hidden m-1 sm:m-2">
              <img src={`images/committees/program/${slugify(name)}.jpg`} />
            </div>
            <div className="text-ubuntu text-center">{name}</div>
          </div>
        ))}
      </div>

      <CommitteeHeader label="Sponsor Committee" color="blue" />
      <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
        {Committees["sponsor"].map((name) => (
          <div key={name}>
            <div className="rounded-full hover:cursor-default border-4 border-f4g_blue overflow-hidden m-1 sm:m-2">
              <img src={`images/committees/sponsor/${slugify(name)}.jpg`} />
            </div>
            <div className="text-ubuntu text-center">{name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
