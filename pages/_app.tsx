import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Header from "../components/Header";
import { AuthContextProvider } from "../context/auth.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Header />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
