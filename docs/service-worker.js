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
    "revision": "cd1aeb7736d20b2c168511918c2c5dcc"
  },
  {
    "url": "allin/all-together.html",
    "revision": "661d64b1eac5f4cc32e43c3a3e265a5e"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "02203f032156d0086aa17ef8f6635596"
  },
  {
    "url": "allin/modifying.html",
    "revision": "75fb5254a9fb3a4c2b912284ae1ae507"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "8b90f326c59610afb0f070e3e23ce2dc"
  },
  {
    "url": "assets/css/0.styles.f218403b.css",
    "revision": "fb6d8a78b6ee944cac7958ce4f6c202f"
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
    "url": "assets/js/10.927041fa.js",
    "revision": "a85b14d14e4f981c3c058ba277913219"
  },
  {
    "url": "assets/js/11.72308444.js",
    "revision": "bd5d090b1079121fbf4e44ae9a506f91"
  },
  {
    "url": "assets/js/12.095c0fa6.js",
    "revision": "db31458810f9d88676a3ea77f0bd82c3"
  },
  {
    "url": "assets/js/13.c83c0c4f.js",
    "revision": "8546d2a9c26a475eabe6f7b6e3ce74ff"
  },
  {
    "url": "assets/js/14.2fae72f0.js",
    "revision": "59202a4f51055fe39536d5705a070ef9"
  },
  {
    "url": "assets/js/15.22d82692.js",
    "revision": "39ecf7f76fa606bc5c94dece5a1d9afd"
  },
  {
    "url": "assets/js/16.f2983cfb.js",
    "revision": "e2489e19d60d251df4020b3f4151660d"
  },
  {
    "url": "assets/js/17.02a24c1e.js",
    "revision": "f7d956dbd0d9045773fd13613a442beb"
  },
  {
    "url": "assets/js/18.0ac6b001.js",
    "revision": "258209203925f8c270a8be967ace57ab"
  },
  {
    "url": "assets/js/19.4dc5475a.js",
    "revision": "742efce1a09319753eaf8077e87ce99f"
  },
  {
    "url": "assets/js/2.5cf0c2db.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.b9b4647f.js",
    "revision": "4cda2a7f2b39b64480bb2ca389effb73"
  },
  {
    "url": "assets/js/21.e4e9d6a9.js",
    "revision": "bcdca40efbcad115f15884f4c3c07b7a"
  },
  {
    "url": "assets/js/3.744d62d7.js",
    "revision": "bee241ecc76cc6d706bb6384ca2d1f69"
  },
  {
    "url": "assets/js/4.59120523.js",
    "revision": "0e8258d63f1dabcd66b7ff29d885b735"
  },
  {
    "url": "assets/js/5.c4175b64.js",
    "revision": "b2bed722bf63bed7c0a53924423c53f3"
  },
  {
    "url": "assets/js/6.ff15eeec.js",
    "revision": "39749fa0e163fb44d8f775205c2f9acc"
  },
  {
    "url": "assets/js/7.66a311af.js",
    "revision": "0e8c2ec281ad434b78bc31c340e7f333"
  },
  {
    "url": "assets/js/8.7638ccac.js",
    "revision": "88cfbd3d2cc733c537e1fa530b85fd0a"
  },
  {
    "url": "assets/js/9.2f60c636.js",
    "revision": "4dbff2e4128cbadc5d3a3271df0c1066"
  },
  {
    "url": "assets/js/app.fe6b14b5.js",
    "revision": "91f2979ca37e087a9a7bdff851e1c0a2"
  },
  {
    "url": "assets/js/vendors~docsearch.8c7acc7a.js",
    "revision": "94f3b34ef4c47f5987085a421d056cb7"
  },
  {
    "url": "index.html",
    "revision": "710fbdd1b4ef10d4d2c0fa75e5216ed7"
  },
  {
    "url": "intro.html",
    "revision": "c9d1dbf40df8e47b9e33817d353f5d05"
  },
  {
    "url": "logo.png",
    "revision": "1887e5ab119e753242159a9736b79c14"
  },
  {
    "url": "next/other-feature.html",
    "revision": "63804873f3680491df57a2f72f7d33c5"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "4197b0842fc3d9d7f9955713bce6bc35"
  },
  {
    "url": "state/initialize.html",
    "revision": "f3ff1e498888b8079e3022e0795e4750"
  },
  {
    "url": "state/intro.html",
    "revision": "8930a7959f5839456d840bfed3dcca23"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "a4949abaf49986cd9ddbf0aae452e475"
  },
  {
    "url": "templating/first-component.html",
    "revision": "19c9811036abac2a73f99f7e925879ae"
  },
  {
    "url": "templating/intro.html",
    "revision": "a6296c0f83319e24883d55f76881bc95"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "d8aa09f0a4748b512e50425ac21f6a43"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "9f03e696915ff7d829b5259b1d824b49"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "f405aa84db6175d8925a8789308a82f4"
  },
  {
    "url": "vdom/existing.html",
    "revision": "592803166f8b9d24aaf482058a628658"
  },
  {
    "url": "vdom/intro.html",
    "revision": "bacc3efafaa7b5bae4920d07a378eb8c"
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
