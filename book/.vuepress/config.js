module.exports = {
  base: "/create-frontend-framework/",
  title: "Frontend framework",
  description:
    "Build a frontend framework from scratch, just to understand how it works",
  ga: "UA-123673201-1",
  serviceWorker: true,
  themeConfig: {
    algolia: {
      apiKey: "9b4d89fd66d9b91c409f78836ef547e3",
      indexName: "mfrachet_frontend_framework"
    },
    nav: [
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/marvin-frachet-49165365/"
      },
      { text: "Twitter", link: "https://twitter.com/mfrachet" },
      { text: "Github", link: "https://github.com/mfrachet" },
      { text: "Medium", link: "https://medium.com/@mfrachet" }
    ],
    sidebar: [
      "/intro",
      {
        title: "Templating",
        collapsable: false,
        children: [
          "/templating/intro",
          "/templating/template-literals",
          "/templating/content-in-dom",
          "/templating/first-component"
        ]
      },
      {
        title: "Virtual DOM",
        collapsable: false,
        children: [
          "/vdom/intro",
          "/vdom/existing",
          "/vdom/adding-snabbdom",
          "/vdom/event-handling"
        ]
      },
      {
        title: "State management",
        collapsable: false,
        children: ["/state/intro", "/state/in-frameworks", "/state/initialize"]
      },
      {
        title: "Bring it all together",
        collapsable: false,
        children: [
          "/allin/real-world-component",
          "/allin/change-detection",
          "/allin/modifying",
          "/allin/all-together"
        ]
      },
      {
        title: "What's next?",
        collapsable: false,
        children: ["/next/other-feature"]
      }
    ]
  }
};
