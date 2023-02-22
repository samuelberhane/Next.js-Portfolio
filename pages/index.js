import Head from "next/head";
import {
  Banner,
  Header,
  Skills,
  Projects,
  Services,
  Contact,
  Footer,
} from "@/components";
import FloatingNav from "@/components/FloatingNav";
import { useModeContext } from "@/context/ModeContext";

export default function Home() {
  const { darkTheme } = useModeContext();
  console.log("mode", darkTheme);
  return (
    <>
      <Head>
        <title>Samuel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`font-[Crimson Text] ${
          darkTheme ? "bg-black text-white" : "text-black bg-white"
        }`}
      >
        <Header />
        <Banner />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <FloatingNav />
      </main>
    </>
  );
}
