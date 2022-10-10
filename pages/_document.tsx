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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
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
