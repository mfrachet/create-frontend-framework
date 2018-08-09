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
    "revision": "2cfbedc59982235ebd7c6a4266add722"
  },
  {
    "url": "allin/all-together.html",
    "revision": "d6e708aae0a93c56bc3dd00c68eab08f"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "18d5a7ee9396375cbc796c3fda496367"
  },
  {
    "url": "allin/modifying.html",
    "revision": "a2d86ca73fdc9686fd27c4b138476258"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "da52170d8f33f198e618bb50951f701f"
  },
  {
    "url": "assets/css/0.styles.a15442d1.css",
    "revision": "304d64aeb35f545d04ac037be05d16d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b62ad024.js",
    "revision": "9e1b96aae1052b64a99a403e6191715c"
  },
  {
    "url": "assets/js/11.2a528aae.js",
    "revision": "26c49ddfb8126be4b95c70eac5a90bf1"
  },
  {
    "url": "assets/js/12.b3b6e3e6.js",
    "revision": "776dda502f69a7d389c4698840a34c07"
  },
  {
    "url": "assets/js/13.6468635c.js",
    "revision": "e8b5aead92f1bd7644ef9f5c7f2c07d3"
  },
  {
    "url": "assets/js/14.44f23dc6.js",
    "revision": "789194e86d8a8acbbbdece4db5b2c026"
  },
  {
    "url": "assets/js/15.b2fe35db.js",
    "revision": "816819f4aaa7288b45f57d30075025cf"
  },
  {
    "url": "assets/js/16.f39df4d5.js",
    "revision": "30f376eee950080ad63e4a408f4c3698"
  },
  {
    "url": "assets/js/17.260d4c5e.js",
    "revision": "1797b78733b435694f43e6240e69c1da"
  },
  {
    "url": "assets/js/18.984b794c.js",
    "revision": "69d5dd302dcf3e189f81658688a12634"
  },
  {
    "url": "assets/js/19.1663d317.js",
    "revision": "adb027fa24124ff6bfc9e7b34a3c2e84"
  },
  {
    "url": "assets/js/2.614cf17f.js",
    "revision": "1bb3cca24f818ce2577b6c986d05a896"
  },
  {
    "url": "assets/js/3.e8d5edc7.js",
    "revision": "6b5ba01e7825f0d8cafa82db0e865a31"
  },
  {
    "url": "assets/js/4.59281bfe.js",
    "revision": "875016e46f52cec2f6d6c08362441d16"
  },
  {
    "url": "assets/js/5.18691a92.js",
    "revision": "069f5d815c251d23455f0c3b9300d136"
  },
  {
    "url": "assets/js/6.3be547e4.js",
    "revision": "eb4248da8f60a687c7566dce02dd2867"
  },
  {
    "url": "assets/js/7.57756851.js",
    "revision": "48e60a81a60fc6aa9b982529d38f62d5"
  },
  {
    "url": "assets/js/8.ece204c8.js",
    "revision": "76b69aeb0ddf78fd2e38dcb4dc047330"
  },
  {
    "url": "assets/js/9.8c3769f9.js",
    "revision": "21488d6aa09ed3ab4aa647924482ab4b"
  },
  {
    "url": "assets/js/app.e38f8ac6.js",
    "revision": "164d1b6c4e0cbc87f0ab3ebb828e201d"
  },
  {
    "url": "index.html",
    "revision": "fd368476f2a16c71133443083eb9adc6"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "2904a31a10b50ecf0d71fc00e434563c"
  },
  {
    "url": "state/initialize.html",
    "revision": "c5798f73e6c1ac39db7a18908c79999a"
  },
  {
    "url": "state/intro.html",
    "revision": "0d2c38d6ba0d86d89aadb45d54de0597"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "d70ff94cd50e19d0ee8cceee6f3d9da8"
  },
  {
    "url": "templating/first-component.html",
    "revision": "2c52802d8f83595ecc0767cdae6ba069"
  },
  {
    "url": "templating/intro.html",
    "revision": "37499f7f994755f9178e352897720685"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "07afecc850cec90a7dc089b71c08b462"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "a3e1ebaf6f94415ba4f738ac69068b7a"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "f10da15aaf12b9b0bb42758f815ba580"
  },
  {
    "url": "vdom/existing.html",
    "revision": "7263780644dcf385c3e3da102ee8651a"
  },
  {
    "url": "vdom/intro.html",
    "revision": "2bd78b42b0002f06d3376026e836ab16"
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
