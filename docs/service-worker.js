/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d50dcde53ddae22f40e61b3f278b0900"
  },
  {
    "url": "allin/all-together.html",
    "revision": "5114f927857fce3df5d85f9e58147100"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "26b5f955e3a9027a695d22dfd2bc0908"
  },
  {
    "url": "allin/modifying.html",
    "revision": "420134a8600d3bee65ced9fd315acfc2"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "7f20be05c614149fabc1699b2e52ce6e"
  },
  {
    "url": "assets/css/0.styles.c2070da3.css",
    "revision": "cde77e46212247c2d0d97d226900e9b9"
  },
  {
    "url": "assets/img/example.768a8757.gif",
    "revision": "768a87579933916cebdf23a255be2e4d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44ea0b8e.js",
    "revision": "a5f800e0b244727f70f6d52626d08e88"
  },
  {
    "url": "assets/js/11.5e3dca0e.js",
    "revision": "1bc6be186b36309b175a13384c050ffb"
  },
  {
    "url": "assets/js/12.6db92b03.js",
    "revision": "636552e9ba0328fd5606d879b36b316c"
  },
  {
    "url": "assets/js/13.2e0b9bcc.js",
    "revision": "f46efc31d0e96a28ad396d4fe1bea272"
  },
  {
    "url": "assets/js/14.ecbc3093.js",
    "revision": "8e4abda9f0169eec274ba753f77cea66"
  },
  {
    "url": "assets/js/15.b409c7c0.js",
    "revision": "e1097f5f9df84f499344e2d3fde25a98"
  },
  {
    "url": "assets/js/16.244c4386.js",
    "revision": "aee255ce0df085cbfd59c94714f8421f"
  },
  {
    "url": "assets/js/17.5f85ba0c.js",
    "revision": "e26f8485d716e1c3bd51ad574d456188"
  },
  {
    "url": "assets/js/18.e4f7c553.js",
    "revision": "430823299e4321bc6338aecfa89b74c4"
  },
  {
    "url": "assets/js/19.0310862c.js",
    "revision": "7bef84da7a59b738064464abb279d678"
  },
  {
    "url": "assets/js/2.d512ec45.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.79482553.js",
    "revision": "145e74f36f0501684fae13931734b02d"
  },
  {
    "url": "assets/js/3.e7450cfc.js",
    "revision": "7cf0589aeefd4bfed4869e3ebc8ca908"
  },
  {
    "url": "assets/js/4.f79fafbf.js",
    "revision": "e00332295794c024862916f2dd0c5944"
  },
  {
    "url": "assets/js/5.748539be.js",
    "revision": "693fa634d38df51568ae0aa512181534"
  },
  {
    "url": "assets/js/6.a4c3630c.js",
    "revision": "e383643f6fc2a600299c11342a9b1abd"
  },
  {
    "url": "assets/js/7.3a5d29ae.js",
    "revision": "fc3a48b7c3c5f24372adf9ca712f8c9d"
  },
  {
    "url": "assets/js/8.d739f308.js",
    "revision": "7c8f08b00a89dc1d98076b0f44c5dce8"
  },
  {
    "url": "assets/js/9.db3160dd.js",
    "revision": "2d54a6d463e89f5c9714590cce4f0aa5"
  },
  {
    "url": "assets/js/app.0422b890.js",
    "revision": "e5cf7cf116b569ae942f64280f1a6b4a"
  },
  {
    "url": "index.html",
    "revision": "03ef10e9661fce638829189546b8e86c"
  },
  {
    "url": "next/other-feature.html",
    "revision": "8d18f22dc4c8fa90d703ad1407415079"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "ca607d939665c5a05ac10615304903e3"
  },
  {
    "url": "state/initialize.html",
    "revision": "db4834f15d624d99f3e60e11e2116db5"
  },
  {
    "url": "state/intro.html",
    "revision": "b9bfad337aea4a4fda1d451e90fdfd65"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "4226b4ee8361088ffe0d488f421ab67d"
  },
  {
    "url": "templating/first-component.html",
    "revision": "595fac3c7976a481016e7506d45ecab4"
  },
  {
    "url": "templating/intro.html",
    "revision": "a7539150b5e0e43bb4e66860dcb6d7d4"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "e657285c5cf5a309ab7b1913f66cd1c1"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "2bfe1fffd75759729cef82bfcc03e457"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "1427604e89043d52a25b207029157e8b"
  },
  {
    "url": "vdom/existing.html",
    "revision": "d4c0016223ffa042a4549a31f7e22528"
  },
  {
    "url": "vdom/intro.html",
    "revision": "f92263636b640c712dd9694f1455c46f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
