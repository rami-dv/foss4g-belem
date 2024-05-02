export const metadata = {
  title: "FOSS4G 2024 Belém Brasil",
  description:
    "Homepage for the FOSS4G 2024 Conference held in Belém, Pará, Brasil on 02-08 December 2024.",
};

export default function IndexPage() {}

export async function getStaticProps() {
  return {
    props: {
      metadata,
    },
  };
}
