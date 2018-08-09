module.exports = {
  title: "Creating a frontend framework",
  description: "Just to understand how it works",
  ga: "UA-123673201-1",
  serviceWorker: true,
  themeConfig: {
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
