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
    "revision": "be960a5fb3682fddda9441784fc9582a"
  },
  {
    "url": "allin/all-together.html",
    "revision": "6884d9b39b17af2810c2fab2882d0290"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "96f77cd638b18bea4e30ad04957f77fd"
  },
  {
    "url": "allin/modifying.html",
    "revision": "28672a4dacaa41fad27c601d8b164f68"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "5bc4b7dcca32f6b06b9ff3f965afecc5"
  },
  {
    "url": "assets/css/0.styles.25560016.css",
    "revision": "877ed522ac1a62e01055e54547ae348d"
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
    "url": "assets/js/app.15749522.js",
    "revision": "2ebfce35ebae42d0328ef9b56fceaf32"
  },
  {
    "url": "index.html",
    "revision": "8aecb5958e01de76256c4f69b69ce0f1"
  },
  {
    "url": "next/other-feature.html",
    "revision": "0b42de6d6c7d8f46946a2f7623a27be9"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "8040f8511ed897eb7a8bdb6341645018"
  },
  {
    "url": "state/initialize.html",
    "revision": "2a9226e318342adba9c3f8fae3d50a7e"
  },
  {
    "url": "state/intro.html",
    "revision": "23c643c79d7148dc365e3dbec044c98c"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "a940d78f1778d95f6795f280e7751d96"
  },
  {
    "url": "templating/first-component.html",
    "revision": "582d015e498b633a4d34b9542861ad37"
  },
  {
    "url": "templating/intro.html",
    "revision": "56f6396932e70f3b8805dd0095c432f3"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "46d978f126e034668dcce3f2175d132d"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "198d4a57ff79df55ce9a90d8f47acbca"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "5429c523243cb78992ff3b77e65697ec"
  },
  {
    "url": "vdom/existing.html",
    "revision": "a2b93b8cc3abe0e43553a37b1775ed67"
  },
  {
    "url": "vdom/intro.html",
    "revision": "9459674e0d67da0c14f3dd0e323e8ae0"
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
