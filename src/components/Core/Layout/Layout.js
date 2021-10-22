import React from "react";
import { Helmet } from "react-helmet";
import favicon from '~image/favicon.png';
import Header from "../Header";

var chatWootPlugin = { __html: `<script>
    (function(d,t) {
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'c1HSWSDvFAqFTZyS4WVGL6sK',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  </script>` };

var analytics = { __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T32LQJTSZP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T32LQJTSZP');
</script>`};

export default function Layout({
  children,
}) {
  return (
    <>
    <Helmet>
          <title>iTalanta | Local Presence, Global Talent</title>
          <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
      <Header/>
      {children}
      <div dangerouslySetInnerHTML={chatWootPlugin}></div>
      <div dangerouslySetInnerHTML={analytics}></div>
    </>
  )
}
