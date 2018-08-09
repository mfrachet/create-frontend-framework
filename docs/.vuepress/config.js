module.exports = {
  title: "Creating a frontend framework",
  description: "Just to understand how it works",
  ga: "UA-123673201-1",
  serviceWorker: true,
  themeConfig: {
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
          "/allin/modifying",
          "/allin/change-detection",
          "/allin/all-together"
        ]
      }
    ]
  }
};
