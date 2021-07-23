// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Franck Fesse',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: "Post",
        path: "./post/**/*.md",
      },
    },
  ],
  templates: {
    Post: "/post/:title",
  },
};
