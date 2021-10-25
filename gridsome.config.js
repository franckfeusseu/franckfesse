// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Franck Fesse',
  SiteDescription: 'Franck Fesse personnal blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: "Post",
        path: "./post/**/*.md",
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
      refs: {
        tags: {
          typeName: 'Tag',
          create: true
          },
        }  
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  templates: {
    Post: "/post/:title",
    Tag: "/tag/:id",
  },
};
