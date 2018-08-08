module.exports = {
  title: "Creating a frontend framework",
  description: "Just to understand how it works",
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
        children: [
          "/state/intro",
          "/state/in-frameworks",
          "/state/initialize",
          "/state/modifying"
        ]
      },
      {
        title: "Bring it all together",
        collapsable: false,
        children: ["/allin/all-together"]
      }
    ]
  }
};
