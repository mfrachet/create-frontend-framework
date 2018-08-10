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
    "revision": "d32a0a0b8b0116517d19341c9eebe8c3"
  },
  {
    "url": "allin/all-together.html",
    "revision": "ad1a68527f827f02514643924b649e5d"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "e84c69dbe3545e58521bda1a02463cf3"
  },
  {
    "url": "allin/modifying.html",
    "revision": "ec5170cffbb9f12a906b9be3e8072495"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "aad1b98f85b7583aa2fa5348c2bac78d"
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
    "url": "assets/js/10.fb3f8a98.js",
    "revision": "e4aa3ff273b71b3b59e4116e8fafdc77"
  },
  {
    "url": "assets/js/11.86406bd3.js",
    "revision": "8a94cc1eecd510efd0e93baeb0499e8d"
  },
  {
    "url": "assets/js/12.a32c516d.js",
    "revision": "af52d2cc06d9939fdc1feb020e36be41"
  },
  {
    "url": "assets/js/13.680322e2.js",
    "revision": "3736f2fef8f73d51b518ff485f648a8f"
  },
  {
    "url": "assets/js/14.71be24d8.js",
    "revision": "bc38038bed6e49e7d5f2aeae10540751"
  },
  {
    "url": "assets/js/15.afc59268.js",
    "revision": "192dde8b4dfdca66b6a25c9d9ceeff33"
  },
  {
    "url": "assets/js/16.16e1b6d1.js",
    "revision": "2669af318835c3c37e010a383c9ddf08"
  },
  {
    "url": "assets/js/17.b3ba8115.js",
    "revision": "07cc142fedae9d490719ba06273a7950"
  },
  {
    "url": "assets/js/18.c363c7a7.js",
    "revision": "d975c3fe59e9064d8c894b1c44f16f9e"
  },
  {
    "url": "assets/js/19.2279a7d2.js",
    "revision": "5220270e75eceb8d48d9c5a4a84cc21c"
  },
  {
    "url": "assets/js/2.26cc2a1e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.a8f74650.js",
    "revision": "abce6e03ffe7b0b0e6fa3ec6bf2f4dca"
  },
  {
    "url": "assets/js/21.56d97696.js",
    "revision": "348a70445c61b284f1bca82ff27116b2"
  },
  {
    "url": "assets/js/3.7c1ebfa0.js",
    "revision": "29ff437b24ce425caa6bc02c802e0e1f"
  },
  {
    "url": "assets/js/4.4a820609.js",
    "revision": "65858fcb20de17cddf00c1e5d4e70fd6"
  },
  {
    "url": "assets/js/5.14344242.js",
    "revision": "c82c2007daa9f4e9eb5883d33c47b850"
  },
  {
    "url": "assets/js/6.767104b6.js",
    "revision": "c345763bef8cd46f6aaa2cf5cd611872"
  },
  {
    "url": "assets/js/7.5e786ecf.js",
    "revision": "971d519bbc212630c699ce82d5e71918"
  },
  {
    "url": "assets/js/8.99db00ac.js",
    "revision": "85f908d266d070b0b095c1a4e9e71bd9"
  },
  {
    "url": "assets/js/9.2d4d768e.js",
    "revision": "ce546d1112a1771433b1b03806c54fe7"
  },
  {
    "url": "assets/js/app.0780e98a.js",
    "revision": "e94fa1d0b93871aedd796892c6446a3e"
  },
  {
    "url": "assets/js/vendors~docsearch.f7eb51c4.js",
    "revision": "1abad141e2adf0e9ae4b1c2bf1db8b8e"
  },
  {
    "url": "index.html",
    "revision": "ccd875c752b04605f405bcf37c4e551a"
  },
  {
    "url": "intro.html",
    "revision": "5b208b86e4e647d4bf4c2be9a7c76dbb"
  },
  {
    "url": "logo.png",
    "revision": "1887e5ab119e753242159a9736b79c14"
  },
  {
    "url": "next/other-feature.html",
    "revision": "ba09d308193119841024fae76e531594"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "54a52f8c60eb71518df8b443c04febec"
  },
  {
    "url": "state/initialize.html",
    "revision": "c87f7254126a28185cc9a9b00a040e46"
  },
  {
    "url": "state/intro.html",
    "revision": "d9c2b5a2b5e07595271dc257ecc4d2b3"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "48c64951709160ed76a7ce6f7f6f9dcb"
  },
  {
    "url": "templating/first-component.html",
    "revision": "b6ebba0836ef688a004dba5d728c1e4f"
  },
  {
    "url": "templating/intro.html",
    "revision": "a35ba03f77a0f3e793597bb2112bf20a"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "0d82606fbf470621436623ce79f88361"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "8b732f52aea39bd6e4f6b0c663623231"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "dac14d1778a6f18b5e240cca045d0f02"
  },
  {
    "url": "vdom/existing.html",
    "revision": "0395115c637fc5ec3f59172d14831db3"
  },
  {
    "url": "vdom/intro.html",
    "revision": "b3d257ec2d4c23d34ef8fa794c263bac"
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
