module.exports = {
  siteMetadata: {
    siteUrl: "https://trang17.github.io",
    title: "tn",
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      }
    },
  ],
};
