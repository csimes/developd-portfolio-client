import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css";

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: any) {
  return (
    <SafeHydrate>
      <Layout>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </Layout>
    </SafeHydrate>
  );
}

export default MyApp;
