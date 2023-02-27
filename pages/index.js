import Head from "next/head";
import {
  Banner,
  Header,
  About,
  Projects,
  Services,
  Contact,
  Footer,
} from "@/components";
import FloatingNav from "@/components/FloatingNav";
import { useModeContext } from "@/context/ModeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { darkTheme } = useModeContext();

  return (
    <>
      <Head>
        <title>Samuel Portfolio</title>
        <meta name="description" content="Samuel Brhane Portfolio" />
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
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <FloatingNav />
      </main>
      <ToastContainer />
    </>
  );
}
