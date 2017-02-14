import Head from 'next/head'

export default () => (
  <Head>
    <title>Full-frame E-mount lenses catalog</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <script dangerouslySetInnerHTML={{__html: `
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-4646421-12', 'auto');
      ga('send', 'pageview');`
    }} />
    <style>{`
      html { font-size: 14px }
      body { margin: 0 }
      @media (max-width: 640px) {
        html { font-size: 12px }
      }
    `}</style>
  </Head>
)
