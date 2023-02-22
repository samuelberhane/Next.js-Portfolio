import "@/styles/globals.css";
import { ModeContextProvider } from "@/context/ModeContext";

export default function App({ Component, pageProps }) {
  return (
    <ModeContextProvider>
      <Component {...pageProps} />
    </ModeContextProvider>
  );
}
