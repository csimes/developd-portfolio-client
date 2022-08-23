import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
