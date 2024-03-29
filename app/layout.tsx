import "./globals.css";
import { Metadata } from "next";
import NextScript from "next/script";
import Script from "next/script";

import Nav from "../components/nav";
import Footer from "../components/footer";
import { Montserrat } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "developd | programmed to perfection.",
  // description: "Welcome to Next.js",
};

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
        <Footer />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <NextScript />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-T4XMR62');`,
          }}
        ></Script>
      </body>
    </html>
  );
};

export default RootLayout;
