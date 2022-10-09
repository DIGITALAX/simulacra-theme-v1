import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Collections } from "../common/components/collections/Collections";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Simulacra Theme v1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ConnectButton /> */}
      <Collections />
    </div>
  );
};

export default Home;
