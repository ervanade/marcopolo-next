import { Html, Head, Main, NextScript } from 'next/document'
import nprogress from '../lib/nprogress';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/marcopolo__favicon.png" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-X1DK4JPXR0"></script>
        <script
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
        />
<meta name="facebook-domain-verification" content="iipwyllso04ih1l03ttdl55suhub84" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
