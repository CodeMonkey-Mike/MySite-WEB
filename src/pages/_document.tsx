// @ts-nocheck
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import favicon from 'assets/images/favicon.ico';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<{
    head?: JSX.Element[];
    styles: JSX.Element;
    html: string;
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head> 
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" />
          <link
            resource="https://fonts.googleapis.com/css?family=Lato:400,700%7CPoppins:700&display=swap"
            href="https://fonts.googleapis.com/css?family=Lato:400,700%7CPoppins:700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            resource="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            resource="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KZSL4G3');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZSL4G3" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
          />
        </body>
      </Html>
    );
  }
}
