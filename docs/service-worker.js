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
    "revision": "49bcce96694b3ad623637dcd468268d9"
  },
  {
    "url": "allin/all-together.html",
    "revision": "43a330dcc49ac8449ace9801b6a8eef8"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "d58e1c358b0a45d50b63bc69e9d76f3a"
  },
  {
    "url": "allin/modifying.html",
    "revision": "81012abae87aded4ff009a05299cd7f1"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "208d19ef50475fd1624ce02fa8c8d8e3"
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
    "url": "assets/js/11.5b6f0d6d.js",
    "revision": "1b22339cfd26b1366bee604fdda8a7f1"
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
    "url": "assets/js/4.c2ae74cb.js",
    "revision": "038037aedb1c400c29c2369f8db4164e"
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
    "url": "assets/js/7.c750e5f5.js",
    "revision": "cde342ee2184c2ebe028d62cb7787925"
  },
  {
    "url": "assets/js/8.d8a9f3f0.js",
    "revision": "dfbd1477dfe300b5cd651964b97a8335"
  },
  {
    "url": "assets/js/9.04b6905f.js",
    "revision": "7b52c2a1dd316299c8e8c2a4962b0330"
  },
  {
    "url": "assets/js/app.fda7442e.js",
    "revision": "d5cd3bb8a2f2d5bee18ef988ca4e8404"
  },
  {
    "url": "assets/js/vendors~docsearch.f13597a1.js",
    "revision": "0b127b646e16bd8ed05f8688de8e86f3"
  },
  {
    "url": "index.html",
    "revision": "89ce7305fef8223acacf5206ccffad1b"
  },
  {
    "url": "next/other-feature.html",
    "revision": "f5700509ec5c299f400e334867bf56c4"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "4fc29f62a4a0babf114d9ba5aaf1ac36"
  },
  {
    "url": "state/initialize.html",
    "revision": "c15bbc7d030870eaa0a1fa2a37e31295"
  },
  {
    "url": "state/intro.html",
    "revision": "a4d9b90da36da661e6cc053852240d41"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "05654f41a2d60bea436e3c15e8073b92"
  },
  {
    "url": "templating/first-component.html",
    "revision": "56efaae152668094def2d511aa61a437"
  },
  {
    "url": "templating/intro.html",
    "revision": "3c028843cbe28df64f9587380c5bdc23"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "393dfbf221a32cc4c2e4ba94680f0b92"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "a169a8167aeef47f2dc6921eceefff68"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "b8f0797dd48dda305e7f405730e063b7"
  },
  {
    "url": "vdom/existing.html",
    "revision": "a3d13b7bdc2fb8392eeb8e251cf82b96"
  },
  {
    "url": "vdom/intro.html",
    "revision": "9b2dd904c7d95f91076741e6d73a2f10"
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
