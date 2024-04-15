import VisaMap from "@/images/Visa_policy_of_Brazil.svg";
import Heading from "@/components/heading";
import VisaCountries from "@/data/visa_countries.json";
import MdxLayout from "@/components/mdx-layout";
import VisaApplicationImage from "@/images/visa-application.jpg";
import Image from "next/image";

import Head from "next/head";

export default function VisaInfoPage() {
  return (
    <>
      <Head>
        <title>Visa Info</title>
      </Head>
      <main className="sm:mx-auto max-w-6xl mx-2 my-2 sm:my-4 min-h-96">
        <Heading label="Visa Info" bubble />
        <div>
          <Image alt="Map of Brazil Visa Countries" src={VisaMap} />
          <div className="flex flex-col sm:flex-row mt-2 justify-center items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center text-sm space-x-1">
              <div className="block [background-color:#a6bf64] w-4 h-4 sm:w-6 sm:h-6 border border-black"></div>
              <div>No Passport Required; National ID Accepted</div>
            </div>
            <div className="flex items-center text-sm space-x-1">
              <div className="block [background-color:#009575] w-4 h-4 sm:w-6 sm:h-6 border border-black"></div>
              <div>Visa Free / Visa On Arrival</div>
            </div>
            <div className="flex items-center text-sm space-x-1">
              <div className="block [background-color:#B2B2B2] w-4 h-4 sm:w-6 sm:h-6 border border-black"></div>
              <div>Visa Required</div>
            </div>
          </div>
        </div>

        <Heading label="Visas by Country" />
        <div className="">
          <div className="text-xl bg-f4g_green text-white p-2 pl-4 rounded-t-lg">
            No Passport Required; National ID Accepted
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-9 items-center justify-center border-f4g_blue border-l border-r border-b">
            {VisaCountries["id_card"].map((iso2) => (
              //  @ts-ignore
              <span key={iso2} className="p-2 text-center">
                {/* @ts-ignore */}
                {VisaCountries["names"]?.[iso2]?.["en"]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xl bg-f4g_blue text-white p-2 pl-4 rounded-t-lg">
            Visa Free / Visa On Arrival
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-7 items-center justify-center border-f4g_green border-l border-r border-b">
            {VisaCountries["visa_free"]
              .map(
                (
                  iso2 // @ts-ignore
                ) => VisaCountries["names"]?.[iso2]?.["en"]
              )
              .sort((a, b) => a.localeCompare(b))
              .map((name) => (
                <span key={name} className="flex justify-center items-center text-center h-16">
                  {name}
                </span>
              ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xl [background-color:#B2B2B2] text-white p-2 pl-4 rounded-t-lg">
            Visa Required
          </div>

          <div className="[border-color:#B2B2B2] border-b border-l border-r text-center p-2">
            (all other countries not listed above)
          </div>
        </div>

        <Heading label="Applying for a Visa" />

        <div className="grid sm:grid-cols-2 space-y-2">
          <div className="flex justify-center items-center">
            <Image
              alt="Person applying for visa"
              className="w-full max-w-96"
              src={VisaApplicationImage}
            />
          </div>
          <div>
            <p>
              For those who have to apply for a visa, don't worry! Luckily,
              tourist visa applications are not to difficult to apply for, and
              Brazil consular services has a great reputation for helping
              tourists with their documentation if necessary.
            </p>
            <br />
            <p>
              <span className="text-lg font-bold">Important: </span>Before you
              apply for a visa, please double check at the{" "}
              <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/quadro-geral-de-regime-de-vistos-para-entrada-de-estrangeiros-no-brasil">
                Official Visa Information
              </a>{" "}
              website to ensure applying for one is necessary. And, begin the
              visa process{" "}
              <span className="font-bold">at least 6 months in advance</span> to ensure no issues.
            </p>
            <br />
            <p>
              Here are some helpful links to learn about how to apply for a
              tourist visa:
            </p>
            <ul className="list-disc list-inside">
              <li className="pl-4">
                <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular">
                  Find a consular office near you
                </a>
              </li>
              <li className="pl-4">
                <a href="https://formulario-mre.serpro.gov.br/sci/pages/web/ui/#/cidadao-nacionalidade">
                  Visa Application Form
                </a>
              </li>
              <li className="pl-4">
                <a href="https://www.gov.br/pt-br/servicos/obter-visto-para-viajar-ao-brasil#etapas-para-a-realizacao-deste-servico">
                  Immigration Legislation
                </a>
              </li>
              <li className="pl-4">
                <a href="https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/informacoes-sobre-vistos-para-estrangeiros-viajarem-ao-brasil">
                  Brazilian Ministry of Foreign Affairs
                </a>
              </li>
              <li className="pl-4">
                <a href="https://en.wikipedia.org/wiki/Visa_policy_of_Brazil">
                  Wikipedia: Visa policy of Brazil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
