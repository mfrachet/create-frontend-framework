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
    "revision": "ac6947ae24eb24ee4b76dc4a6bee4e5b"
  },
  {
    "url": "allin/all-together.html",
    "revision": "388172ea3745ee8b94047eb84795633e"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "4df8f9051013e3f8125e43cb68c83b3e"
  },
  {
    "url": "allin/modifying.html",
    "revision": "4d1b5faac3068326989d0260053be949"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "9083357f331409292be2afb995857950"
  },
  {
    "url": "assets/css/0.styles.18d76826.css",
    "revision": "9fb63c00415026b4694ccde9ba1b55b3"
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
    "url": "assets/js/10.718fb647.js",
    "revision": "b12177da09fc6e2ad64211a78abd570b"
  },
  {
    "url": "assets/js/11.a75ddf61.js",
    "revision": "ba7c8a85bd4d8f69b7942d4235ec2acb"
  },
  {
    "url": "assets/js/12.c1698230.js",
    "revision": "d4aae4b6be6497e8566c7497f2872dfc"
  },
  {
    "url": "assets/js/13.5e57e933.js",
    "revision": "40e5538491374120719b81149d6f1e6d"
  },
  {
    "url": "assets/js/14.f621614a.js",
    "revision": "4dc23b8efdcec47bd88cbd5fdf9672b1"
  },
  {
    "url": "assets/js/15.95ed5b55.js",
    "revision": "80af17e031e9af71f02bcb7cc4e64aab"
  },
  {
    "url": "assets/js/16.eee9bf61.js",
    "revision": "b4df281475ebe886871d9e319a85c544"
  },
  {
    "url": "assets/js/17.3c308ba9.js",
    "revision": "12aa430f618c537b21774e5d5ee0a88a"
  },
  {
    "url": "assets/js/18.56389c5e.js",
    "revision": "91bd4fd351f69107a2a6080d7679e3d4"
  },
  {
    "url": "assets/js/19.01f4b3fb.js",
    "revision": "ba0dfea3ffe3674b145261a922d0e3fe"
  },
  {
    "url": "assets/js/2.26cc2a1e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.a54e5d9a.js",
    "revision": "9fa38029f1f77273ebe34827b3869dac"
  },
  {
    "url": "assets/js/3.47b1d0bd.js",
    "revision": "6cc97444cb33a9e2ba2ad88f32ecc59e"
  },
  {
    "url": "assets/js/4.a9c09403.js",
    "revision": "165f0de3d3f9db15b6b7e9d4d6c2adf6"
  },
  {
    "url": "assets/js/5.45dcb7ef.js",
    "revision": "2a5f0b3afbd9b6998c13a929ba29f844"
  },
  {
    "url": "assets/js/6.f6e25052.js",
    "revision": "f9ff0844363d5b7219ff51daa6559ee3"
  },
  {
    "url": "assets/js/7.851138c6.js",
    "revision": "a1a83b7bb73fa9e0ed62a6e567113bf4"
  },
  {
    "url": "assets/js/8.6738bcd6.js",
    "revision": "9981c85e2309f4c3be63b75a4b33ab0d"
  },
  {
    "url": "assets/js/9.04b6905f.js",
    "revision": "7b52c2a1dd316299c8e8c2a4962b0330"
  },
  {
    "url": "assets/js/app.b4554298.js",
    "revision": "985742acf38facb1585e5e9689c44ac7"
  },
  {
    "url": "assets/js/vendors~docsearch.f13597a1.js",
    "revision": "0b127b646e16bd8ed05f8688de8e86f3"
  },
  {
    "url": "index.html",
    "revision": "ffb9af6c010684858260eb08a747272e"
  },
  {
    "url": "next/other-feature.html",
    "revision": "b55a18b843b790bffe427d88d205d604"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "1c79315d6275183fc649ab9f8ca9b29b"
  },
  {
    "url": "state/initialize.html",
    "revision": "43297f4a6b6103383c3a9cd19e0276fe"
  },
  {
    "url": "state/intro.html",
    "revision": "2041a594187346d4d886dc8928ef9783"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "f3140111acf04aa455150544f4a57dd6"
  },
  {
    "url": "templating/first-component.html",
    "revision": "6b6ae92d98610a083e5edf68c0f197e8"
  },
  {
    "url": "templating/intro.html",
    "revision": "7ad89ec021d059f9ab3bab195e1064ed"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "e661d44c364be017150f23655bd85e88"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "b799ddb6ebe96d6ee65b4854987c712d"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "5c33fda41bc85323bbaf7324d8db5bda"
  },
  {
    "url": "vdom/existing.html",
    "revision": "91ad62c8c8d42273a239c89c6d183ee9"
  },
  {
    "url": "vdom/intro.html",
    "revision": "1c04737edaac57aac59a8612b0cbe58c"
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
