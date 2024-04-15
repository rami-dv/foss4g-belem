import Committees from "@/data/committees.json";
import Image from "next/image";
import Heading from "@/components/heading";
import CommitteeImage from "@/images/committee.jpg";

import Head from "next/head";

function slugify(str: string) {
  return str
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "-");
}

export default function CommitteesPage() {
  return (
    <>
      <Head>
        <title>Conference Committees</title>
      </Head>
      <main className="sm:mx-auto max-w-6xl mx-2 my-2 sm:my-4">
        <Heading label="Conference Committees" color="red" bubble />
        <div className="grid sm:grid-cols-2">
          <div className="flex-grow">
            <Image alt="Conference Committee" src={CommitteeImage} />
          </div>
          <div className="flex-shrink">
            Brazil has made significant contributions to various open source
            geospatial software projects. Some examples include the development
            of OSGeo-based tools such as QGIS, GRASS GIS, GeoServer and others.
            In addition, the Brazilian community has actively participated in
            the translation of documentation and the organization of events
            related to OSGeo. To learn more about Brazil&apos;s experience with
            OSGeo, we invite you to visit our wiki.
          </div>
        </div>

        <Heading label="Local Committee" color="red" />
        <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
          {Committees["loc"].map((name) => (
            <div key={name}>
              <div className="aspect-square rounded-full hover:cursor-default border-4 border-f4g_red overflow-hidden m-1 sm:m-2">
                <img src={`images/committees/loc/${slugify(name)}.jpg`} />
              </div>
              <div className="text-ubuntu text-center">{name}</div>
            </div>
          ))}
        </div>

        <Heading label="Academic Committee" color="orange" />
        <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
          {Committees["academic"].map((name) => (
            <div key={name}>
              <div className="aspect-square rounded-full hover:cursor-default border-4 border-f4g_orange overflow-hidden m-1 sm:m-2">
                <img src={`images/committees/academic/${slugify(name)}.jpg`} />
              </div>
              <div className="text-ubuntu text-center">{name}</div>
            </div>
          ))}
        </div>

        <Heading label="Program Committee" color="green" />
        <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
          {Committees["program"].map((name) => (
            <div key={name}>
              <div className="aspect-square rounded-full hover:cursor-default border-4 border-f4g_green overflow-hidden m-1 sm:m-2">
                <img src={`images/committees/program/${slugify(name)}.jpg`} />
              </div>
              <div className="text-ubuntu text-center">{name}</div>
            </div>
          ))}
        </div>

        <Heading label="Sponsor Committee" color="blue" />
        <div className="grid grid-cols-3 sm:grid-cols-6 sm:space-x-1">
          {Committees["sponsor"].map((name) => (
            <div key={name}>
              <div className="aspect-square rounded-full hover:cursor-default border-4 border-f4g_blue overflow-hidden m-1 sm:m-2">
                <img src={`images/committees/sponsor/${slugify(name)}.jpg`} />
              </div>
              <div className="text-ubuntu text-center">{name}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
