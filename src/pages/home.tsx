import Search from "@/components/search";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>Glance</title>
        <meta name="description" content="GCC Student Directory" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1>Glance</h1>
        <Search />
      </main>
    </>
  );
};

export default Home;
