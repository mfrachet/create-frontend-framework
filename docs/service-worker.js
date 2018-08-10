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
    "revision": "cd41049f620eec0960357ed56b38f3e4"
  },
  {
    "url": "allin/all-together.html",
    "revision": "9ac19318a03751f973f3a4e88953ce9a"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "8ecbe9d523f5c1392f18908184e8e3fb"
  },
  {
    "url": "allin/modifying.html",
    "revision": "26f2d1fb422f1fc98379f8b45917b6b2"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "9ad2ae1d056251b4e42279b6a19411f5"
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
    "url": "assets/js/14.688d9885.js",
    "revision": "a440c062c7d926ad9cfea78fb03e94e5"
  },
  {
    "url": "assets/js/15.5d9ed64c.js",
    "revision": "97e021785fdfdaded1d6496d9d0506b4"
  },
  {
    "url": "assets/js/16.323c3f6e.js",
    "revision": "b85a2dbc1856c9ae08747398114f4803"
  },
  {
    "url": "assets/js/17.d72dd112.js",
    "revision": "543d5aded48f8cd2fb38adfcdad55f30"
  },
  {
    "url": "assets/js/18.9e8a7bbb.js",
    "revision": "b81f055a5a958b44c55604b208b15972"
  },
  {
    "url": "assets/js/19.337d5ca3.js",
    "revision": "96473cba18ee96818a83d350fe8fc2ac"
  },
  {
    "url": "assets/js/2.26cc2a1e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.3a4ac36b.js",
    "revision": "0cb4fb51c04f6ca1825ecf8ec1604343"
  },
  {
    "url": "assets/js/21.6e24d790.js",
    "revision": "4541b608b08acb7cecd9ab4faeff12df"
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
    "url": "assets/js/6.d25d18ab.js",
    "revision": "05dcef5c98d5b08b96d01ef8d9e122fe"
  },
  {
    "url": "assets/js/7.b202c128.js",
    "revision": "f8ca19e676157e1616c88b3fa6b1d096"
  },
  {
    "url": "assets/js/8.ae1c83e6.js",
    "revision": "069139afe4267ccfc4abef70bf4469af"
  },
  {
    "url": "assets/js/9.2d4d768e.js",
    "revision": "ce546d1112a1771433b1b03806c54fe7"
  },
  {
    "url": "assets/js/app.10b325d5.js",
    "revision": "843bae9016e4d043d154d3affb704c15"
  },
  {
    "url": "assets/js/vendors~docsearch.f7eb51c4.js",
    "revision": "1abad141e2adf0e9ae4b1c2bf1db8b8e"
  },
  {
    "url": "index.html",
    "revision": "70316b77c3ef17af430ed6fe7f73e1f9"
  },
  {
    "url": "intro.html",
    "revision": "a78b559151aa0a2e6bb9d60ecec6e784"
  },
  {
    "url": "logo.png",
    "revision": "1887e5ab119e753242159a9736b79c14"
  },
  {
    "url": "next/other-feature.html",
    "revision": "81181cac834929fd1b646f185a2ac2bc"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "26e4474b64c05968ad107c1a1d1b13ae"
  },
  {
    "url": "state/initialize.html",
    "revision": "b28d7f7e8b71937a2928aba6bc70cce8"
  },
  {
    "url": "state/intro.html",
    "revision": "f3c2804690f7180de52d80e225477142"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "9edcc2959690d5c495270859d7008e91"
  },
  {
    "url": "templating/first-component.html",
    "revision": "5b7def492c6f45e72e97fddb1d55ce44"
  },
  {
    "url": "templating/intro.html",
    "revision": "dad1566c404a61ad9c1eab6182b32ada"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "69a63b2c2253db570beb5171309c27bb"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "5469611f7f0b123ae17b7e5f018798aa"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "52aa6a433490e4b17b4982a163fe5d71"
  },
  {
    "url": "vdom/existing.html",
    "revision": "27096d54435308bc9cc73744d2aa3864"
  },
  {
    "url": "vdom/intro.html",
    "revision": "c27b28e9f8ff57f6f1179ffe456906b7"
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
