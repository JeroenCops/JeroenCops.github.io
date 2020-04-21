module.exports = {
  siteMetadata: {
    title: `Jeroen Cops`,
    siteUrl: `https://jeroencops.github.io`,
    description: `Een portfolio webpagina over Jeroen Cops, een student Toegepaste Informatica aan de Hogeschool PXL.`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Over mijzelf",
            url: "/about"
          },
          {
            title: "GitHub",
            url: "/github"
          }
        ]
      },
      footer: {
        copyright: "jeroencops.github.io",
        columns: [
          {
            heading: "Meer info",
            links: [
              {
                title: "GitHub",
                url: "https://github.com/JeroenCops"
              },
              {
                title: "Source Code",
                url: "https://github.com/JeroenCops/JeroenCops.github.io/tree/source"
              },
              {
                title: "Gatsby",
                url: "https://www.gatsbyjs.org/"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
