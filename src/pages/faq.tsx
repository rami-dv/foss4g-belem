import { PropsWithChildren } from "react";
import Link from "next/link";
import Heading from "@/components/heading";
function FaqBubble({
  question,
  children,
}: PropsWithChildren<{
  question: React.ReactNode;
}>) {
  return (
    <>
      <div className="">
        <div className="bg-f4g_red/90 text-white rounded-t-lg px-4 py-3 leading-5 text-lg">
          {question}
        </div>
        <div className="px-2 py-1 border border-f4g_red rounded-b-lg">
          {children}
        </div>
      </div>
    </>
  );
}

export default function FaqPage() {
  const gridClassName = "grid grid-cols-1 sm:grid-cols-2 sm:space-x-4";
  const colClassName = "space-y-4 my-2";

  return (
    <main className="sm:mx-auto max-w-6xl mx-2 my-2 sm:my-4">
      <Heading color="red" label="Frequently Asked Questions" />
      <div className={gridClassName}>
        <div className={colClassName}>
          <FaqBubble question="When and where is the conference?">
            The conference will take place from December 2 to December 8, 2024
            in Belém do Pará, Brazil. It will take place in two spaces: Hangar
            and the Instituto Federal de Educação, Ciência e Tecnologia do Pará
            (IFPA)
          </FaqBubble>

          <FaqBubble question="Will the presentations be recorded and made available to the public after the conference?">
            Yes. After the conference, recordings of the talks will be made
            available on OSGeo's official YouTube/FOSS4G channel. The workshops
            will not be recorded.
          </FaqBubble>

          <FaqBubble question="What will the event be like?">
            After the pandemic has passed, it seems important to us to resume
            in-person events. Therefore, it will be in person, not hybrid.
          </FaqBubble>

          <FaqBubble question="I am not dedicated to geomatics, can I attend the Conference?">
            Yes, the conference is open to any public interested in geomatics,
            free software, maps and communities.
          </FaqBubble>
        </div>

        <div className={colClassName}>
          <FaqBubble question="If I am not a developer or write code, is this conference also for me?">
            Yes, this event is for all types of people interested in sharing map
            experiences, from developers writing code to users of geomatics
            software, decision makers, researchers, students and anyone who
            wants to learn, share and meet like-minded people.
          </FaqBubble>

          <FaqBubble question="What activities will the Conference have?">
            The conference will have Plenary Talks, academic track, specific
            track, workshops, codesprint and social events, and others.
          </FaqBubble>

          <FaqBubble question="How to get to Belém do Pará?">
            To get to Belém do Pará in Brazil, you can consider several means of
            transportation, depending on your exact location and preferences. We
            invite you to go to the{" "}
            <Link href="/getting-to-belem">Getting to Belém</Link> page, where
            you can find more information.
          </FaqBubble>
        </div>
      </div>

      <Heading color="red" label="Registration Questions" />

      <div className={gridClassName}>
        <div className={colClassName}>
          <FaqBubble question="Can I go without registering?">
            The event will only be accessible to registered users.
          </FaqBubble>

          <FaqBubble question="What types of tickets will exist?">
            There will be different ticket prices depending on your place of
            residence: Brazil (LOC), Argentina (LOC linebacker), Countries of
            Latin America and the Caribbean (Regional), Countries that do not
            include Latin America and the Caribbean (International)
          </FaqBubble>

          <FaqBubble question="What is included in the ticket?">
            The cost of admission to the conference includes entry to all track
            activities and social events. What is not included is the entrance
            to workshops, these are purchased separately.
          </FaqBubble>

          <FaqBubble question="How do I register to attend the Conference?">
            Registration and ticket purchase are done through an online system.
            When registration is enabled, we will notify you through social
            networks and the email list.
          </FaqBubble>

          <FaqBubble question="How do I sign up for the workshops?">
            Each workshop can be purchased as an individual ticket. They will be
            on sale once the calendar is published. We recommend registering as
            soon as possible.
          </FaqBubble>

          <FaqBubble question="How do I know if there is space for workshops?">
            On the registration page (which is not yet enabled), you will be
            able to see the options and how many places are still available.
            Space in the training rooms is limited, so we can only offer a
            limited number of tickets.
          </FaqBubble>
        </div>

        <div className={colClassName}>
          <FaqBubble question="If I have already purchased my ticket, how can I get an invoice/receipt for my payment?">
            If you have already purchased your ticket, we will send you the
            receipt by email. Invoices will be made by the local OSGeo Brazil
            chapter or by Fundación OSGeo depending on your country of origin.
            During the purchase process, billing information can be completed,
            such as the company name to which it is directed and the tax ID.
            Make sure that the information is correct because once the ticket is
            purchased and the invoice is generated it cannot be corrected.
          </FaqBubble>

          <FaqBubble question="I need a certificate of my attendance at the event, will they be delivered?">
            Yes, they will be sent once the event ends.
          </FaqBubble>

          <FaqBubble question="Will they deliver t-shirts or congress material?">
            All participants will receive a complimentary bottle of water and a
            tote bag, and t-shirts can be purchased online.
          </FaqBubble>

          <FaqBubble question="Can I purchase additional products?">
            Yes, the idea is that in addition to obtaining these items with the
            ticket, you can buy some additional products, and the money raised
            will go to the TGP.{" "}
            <ul className="list-disc list-inside">
              <li>
                <a href="https://www.redbubble.com/people/FOSS4G2024/">
                  RedBubble
                </a>
              </li>
              <li>
                <a href="https://www.cafepress.com/shop/FOSS4G2024">
                  CafePress
                </a>
              </li>
            </ul>
          </FaqBubble>

          <FaqBubble question="Unexpected cancellation of the event or inability to carry it out">
            In the unlikely event that FOSS4G 2024 cannot be held in whole or in
            part due to any event beyond the control of the Organizers or force
            majeure (such as riots, fires, explosions, accidents, floods,
            earthquakes, sabotage, strikes, pandemic, acts of any government,
            etc.) the Conference Organizers are not responsible for any damage,
            cost or loss incurred such as registration fee or any other direct
            or indirect loss or consequential damage.
          </FaqBubble>
        </div>
      </div>

      <Heading color="red" label="Accommodation Questions" />

      <div className={gridClassName}>
        <div className={colClassName}>
          <FaqBubble question="Are food and lodging included in professional and corporate registration fees?">
            Accommodation must be booked and paid for separately, but food is
            included in the registration fee. To see more information about
            where you can find accommodation, check out the{" "}
            <Link href="/accommodation">Accommodation</Link> page
          </FaqBubble>

          <FaqBubble question="I have someone accompanying me, do they need to register as well?">
            Companions must be registered in the following cases: to participate
            in the conference and if they wish to eat at the facilities.
          </FaqBubble>

          <FaqBubble question="What are the options for getting around?">
            The Hangar Center is located 5km from Belém International Airport, a
            9-minute drive by car. There is also the option of a public bus
            (line 643 - 631), with a journey of 29 minutes. From the
            International Airport to the center of Belém, it is 9 km, by car 22
            minutes, and by public transportation, 31 minutes (line 889 or 869).
          </FaqBubble>
        </div>

        <div className={colClassName}>
          <FaqBubble question="Are there any options for child care?">
            <p>
              Everyone is welcome to attend and we encourage friends or family
              who may have some interest in joining our community to also
              register for the conference.
            </p>
            <p>
              The daycare service is available at FOSS4G with a capacity limit
              of 30 children, only for 4 hours from 9 a.m. to 12 p.m. from 2
              p.m. to 5 p.m. In order for us to keep track of those who need the
              service, for this reason we need you to register beforehand.
            </p>
            <p>
              Registration is not open at this time, however please check back
              soon for more information; once opened, childcare registration
              will be open until October 30, 2024.
            </p>
          </FaqBubble>
        </div>
      </div>

      <Heading color="red" label="Useful Information" />

      <div className={gridClassName}>
        <div className={colClassName}>
          <FaqBubble question="Where can I find a map of the place and its surroundings?">
            You can find a map of the facilities and surrounding area here:{" "}
            <a
              href="https://umap.openstreetmap.fr/pt-br/map/foss4g-2024_1036152#13/-1.4521/-48.4478"
              target="_blank"
            >
              MAPA
            </a>
            . You can also go to the <Link href="/venue">Venue</Link> page
          </FaqBubble>

          <FaqBubble question="What are the payment options at local stores and restaurants?">
            Credit cards are accepted in supermarkets. Small stores only accept
            cash. Restaurants usually accept cards, while most cafes accept cash
            or credit cards. The currency is Brazilian Real (BRL).
          </FaqBubble>

          <FaqBubble question="Is tap water drinkable?">
            No, the water that reaches the Belém tap is not drinkable. It is
            recommended to consume mineral water or filtered water. Likewise, at
            the conference we will give out bottles of water.
          </FaqBubble>

          <FaqBubble question="What are the suggested restaurants and pubs in Belem?">
            Some of the best restaurants and pubs in Belém can be found{" "}
            <a
              href="https://www.tripadvisor.com/Restaurants-g303404-zfg11776-Belem_State_of_Para.html"
              target="_blank"
            >
              here
            </a>
            , according to TripAdvisor.
          </FaqBubble>

          <FaqBubble question="I'm worried about security. How should I behave?">
            <p>
              Statistically, Belém is not a city with high levels of crime.
              Belém is the center of many activities for the region, such as the
              Belém Opera Festival, Carnival in Belém, Círio de Nazaré, Cinema
              Festival, among other things, without relevant conflicts. To avoid
              having a bad time you will have to take classic care when
              traveling to an unknown city where another language is spoken. It
              is recommended that you always have your belongings with you, and
              that you put away phones and cameras once they are used in public
              spaces.{" "}
            </p>
            <p>Emergency Links:</p>
            <ul className="pl-4 list-disc list-inside">
              <li>
                <a href="https://www.delegaciavirtual.pa.gov.br/#/">
                  Virtual police station
                </a>
              </li>
              <li>
                <a href="https://jetcall.tiness.com.br/violencia_contra_mulher/">
                  Delegation Specialized in care for Women
                </a>
              </li>
            </ul>
            <p>
              In case of emergency, you can call these 24/7 toll-free numbers
              from any phone:
            </p>
            <ul className="pl-4 list-disc list-inside">
              <li>190: Military Police</li>
              <li>192: Emergency Medical Assistance (SAMU)</li>
              <li>193: Fire department</li>
              <li>191: Federal Highway Police</li>
            </ul>
          </FaqBubble>
        </div>

        <div className={colClassName}>
          <FaqBubble question="How does currency and exchange work in Belém?">
            The currency of Brazil is the REAL (R$). It can be redeemed at
            banks, exchange offices, travel agencies and authorized hotels. Most
            companies that provide services to tourists accept international
            credit cards. We leave the official premises to{" "}
            <a
              href="https://belemtur.belem.pa.gov.br/casas-de-cambio/"
              target="_blank"
            >
              exchange currency
            </a>
          </FaqBubble>
          <FaqBubble question="Where can I get a SIM card in Belém?">
            Purchasing a SIM card as a foreigner in Brasil is unfortunately a
            complicated process, due to needing a CPF number, which is difficult
            to obtain. We highly recommend either activating international
            roaming on your phone plan, or purchasing a Brazilian eSIM before
            arrival. We recommend purchasing an eSIM with a reputable company
            such as <a href="https://www.airalo.com/">Airalo</a>
          </FaqBubble>
          <FaqBubble question="Which power plugs and adapters work in Brazil?">
            Brazil uses outlet types C and N at a voltage of 127/220V and a
            frequency of 60 Hz. These are the same plugs as many European
            countries.
          </FaqBubble>
          <FaqBubble question="What are the options for healthcare if something were to happen during my visit?">
            <p>
              As with travelling anywhere, it is recommended to take out
              international health insurance before your trip to Belém. In
              addition, the Unified Health System (Sistema Único de Saúde, or
              SUS) allows free access to medical care.
            </p>
            <p>
              If you ever find yourself in a difficult financial situation, you
              will not have to worry, since the public health system offers you
              free check-ups and treatments.{" "}
            </p>
            <p>
              In case you wish to consult private medicine, here is a list of
              some expected costs:
            </p>
            <ul className="pl-4 list-disc list-inside">
              <li>Consultation with the family doctor: from R$120 to 500</li>
              <li>Consultation with a specialist: R$280 to R$400</li>
              <li>Consultation with the dentist: R$150</li>
              <li>Simple surgical intervention: R$14,000 to R$28,000</li>
              <li>
                Hospitalization (one day, not including treatment and tests):
                R$2,500 to R$9,000
              </li>
            </ul>
            <p>
              Of course, the exact costs depend on the state and city in which
              you receive treatment. But the price will be much higher in São
              Paulo, since the best doctors and centers are located there, and
              their services are in high demand. If you have an emergency, you
              should know the numbers to dial. If you need an ambulance, dial
              192 SAMU (Mobile Emergency Care Service).
            </p>
            <p>
              <b>Recommendation</b>: Drink plenty of water. Brazil is a tropical
              country, so we recommend that you stay hydrated at all times.
            </p>
          </FaqBubble>
        </div>
      </div>
    </main>
  );
}
