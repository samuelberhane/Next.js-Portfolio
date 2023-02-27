import "@/styles/globals.css";
import { ModeContextProvider } from "@/context/ModeContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ModeContextProvider>
      <Head>
        <title>Samuel Portfolio</title>
        <meta name="description" content="Samuel Brhane Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ModeContextProvider>
  );
}
