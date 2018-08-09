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
    "revision": "5ac5aef0248301abb84fdbba3795036a"
  },
  {
    "url": "allin/all-together.html",
    "revision": "403bded8d6b6061bd053c3f012bf7387"
  },
  {
    "url": "allin/change-detection.html",
    "revision": "4794a225fbccbf29439358e22476acd6"
  },
  {
    "url": "allin/modifying.html",
    "revision": "c4376c7b8e764db495d3bd77e2ea7d61"
  },
  {
    "url": "allin/real-world-component.html",
    "revision": "6ce799019d47c5b601036984bf965e3f"
  },
  {
    "url": "assets/css/0.styles.4915ca0c.css",
    "revision": "1aa995002e395c8eec834b7b9b16b1df"
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
    "url": "assets/js/app.995ecfce.js",
    "revision": "3bd466628ac8dc68ebd91cec75375256"
  },
  {
    "url": "index.html",
    "revision": "3287798ba735c7641a27c8aaf3761d8a"
  },
  {
    "url": "next/other-feature.html",
    "revision": "4cf868fe1d7c38d531b1e0782ef2699b"
  },
  {
    "url": "state/in-frameworks.html",
    "revision": "800bc1f304fc32f07d98fba6279ff732"
  },
  {
    "url": "state/initialize.html",
    "revision": "216eaa890249e2b394ac96f9596b946c"
  },
  {
    "url": "state/intro.html",
    "revision": "9cff79d8ea555f8da65b4c7b982e4f0d"
  },
  {
    "url": "templating/content-in-dom.html",
    "revision": "79e4b2268d96caad2f56bad038997855"
  },
  {
    "url": "templating/first-component.html",
    "revision": "0927fdae4f035663bc88435f88a1f8e5"
  },
  {
    "url": "templating/intro.html",
    "revision": "f9add2173ed1dfd848f98a216f9898e7"
  },
  {
    "url": "templating/template-literals.html",
    "revision": "efb797a0f20fab0c55a19a895be05a89"
  },
  {
    "url": "vdom/adding-snabbdom.html",
    "revision": "e8ddad612cc24993c7ad65c4b3550fb7"
  },
  {
    "url": "vdom/event-handling.html",
    "revision": "db35a7ae70c8341e1d64033fe222d51d"
  },
  {
    "url": "vdom/existing.html",
    "revision": "5e3a87d8de673949c4fd850a5006f11f"
  },
  {
    "url": "vdom/intro.html",
    "revision": "420616333d5e75ee1b420e2043d15460"
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
