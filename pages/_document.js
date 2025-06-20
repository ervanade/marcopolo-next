import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/marcopolo__favicon.png" />
      <link rel='canonical' href={currentUrl} />
      <meta name="robots" content="index, follow"/>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-X1DK4JPXR0" strategy="afterInteractive" />
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-X1DK4JPXR0"></script> */}
      <Script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X1DK4JPXR0');
            `,
          }} strategy="afterInteractive" />
          <Script dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  appId      : '1486056371919786',
                  xfbml      : true,
                  version    : 'v16.0'
                });
                FB.AppEvents.logPageView();
              };

              (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'facebook-jssdk'));
            `,
          }} strategy="afterInteractive"/>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=DC-10827733"
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'DC-10827733');
            `,
          }}
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X1DK4JPXR0');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  appId      : '1486056371919786',
                  xfbml      : true,
                  version    : 'v16.0'
                });
                FB.AppEvents.logPageView();
              };

              (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'facebook-jssdk'));
            `,
          }}
        /> */}
<meta name="facebook-domain-verification" content="iipwyllso04ih1l03ttdl55suhub84" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
