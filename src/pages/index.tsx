import { metadata } from "@/pages/en/index";

export { metadata } from "@/pages/en/index";

export default function IndexPage() {
  return <></>;
}

export async function getStaticProps() {
  return {
    props: {
      metadata,
    },
  };
}
