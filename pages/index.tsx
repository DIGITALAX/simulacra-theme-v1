import type { NextPage } from "next";
import Head from "next/head";
import { Collections } from "../components/common/Collections";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="bg-offPink">
      <Head>
        <title></title>
        <meta name="description" content="Simulacra Theme v1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Collections />
    </div>
  );
};

export default Home;
