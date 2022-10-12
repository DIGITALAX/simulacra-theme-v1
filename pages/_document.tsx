import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="" />
          <meta property="og:title" content="Inari Synth" />
          <meta property="og:description" content="Simulacra Theme" />
          <meta property="og:image" content="" />
          <meta property="twitter:card" content="summary" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            data-noprefix
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
            data-noprefix
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: "Fira Medium";
              font-weight: 400;
              src: url("./fonts/FiraCode-Medium.ttf");
            }

            @font-face {
            font-family: "Fira Bold";
            font-weight: 400;
            src: url("./fonts/FiraCode-Bold.ttf");
            }

            @font-face {
              font-family: "Fira Reg";
              font-weight: 400;
              src: url("./fonts/FiraCode-Regular.ttf");
            }

            @font-face {
              font-family: "Fira Reg";
              font-weight: 400;
              src: url("./fonts/FiraCode-Retina.ttf");
            }

            @font-face {
              font-family: "Fira Light";
              font-weight: 400;
              src: url("./fonts/FiraCode-Light.ttf");
            }

            @font-face {
              font-family: "Jack Lane";
              font-weight: 400;
              src: url("./fonts/jacklane_2.woff");
            }

            @font-face {
              font-family: "Love of Thunder";
              font-weight: 400;
              src: url("./fonts/A Love of Thunder.ttf");
            }
            `,
            }}
          ></style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    );
  }
}

export default Document;
