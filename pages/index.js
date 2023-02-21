import Head from "next/head";
import { Banner, Header, Skills, Projects, Services } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-[Crimson Text] ">
        <Header />
        <Banner />
        <Skills />
        <Projects />
        <Services />
      </main>
    </>
  );
}
