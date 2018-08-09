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
    "revision": "55a030f9d3439e343a4ea91167aa59f8"
  },
  {
    "url": "allin/all-together.html",
    "revision": "63e5b64dac138fb1801ce6bce0b70385"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "fb94e8b7a8472688e52aaac1b113801d"
  },
  {
    "url": "allin/modifying.html",
    "revision": "5b1db81074945529079de871e5191bab"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "8b96ce213635b392bbfe177ad5b122b5"
  },
  {
    "url": "assets/css/0.styles.0af611c0.css",
    "revision": "8253af405c9ae032b68c9429cb328c91"
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
    "url": "assets/js/app.bc0de82f.js",
    "revision": "7242cae8b23c27a44e83a46e1aa64f6e"
  },
  {
    "url": "index.html",
    "revision": "95c447648d2239e5d74d091ef06d5ae1"
  },
  {
    "url": "next/other-feature.html",
    "revision": "9fecc83cbc9fd941b6eb9bbfcc5d2b42"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "e6727d114e4fdc712d85558cfe1bc658"
  },
  {
    "url": "state/initialize.html",
    "revision": "02d355ac5d8781ec7953e1580651b8ce"
  },
  {
    "url": "state/intro.html",
    "revision": "ddd2e441bb2359717183a6c08755d353"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "445c0c107e844c6cb413128691bc944e"
  },
  {
    "url": "templating/first-component.html",
    "revision": "b1d0e73a1f62df148ec03e17f200a061"
  },
  {
    "url": "templating/intro.html",
    "revision": "99ac452fcb0143dcf9ec76523df19bc4"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "7c256cdc5546f975d53e336feb50c3d7"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "af08907d137f02271fcaf96953437faf"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "8d2acf6466aba62bd63dbf8a88ed4fb8"
  },
  {
    "url": "vdom/existing.html",
    "revision": "4b62da66cff97006dc3e30d2a6017ff3"
  },
  {
    "url": "vdom/intro.html",
    "revision": "9dfef3b22d534ae5c2a3978a0ec84507"
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
