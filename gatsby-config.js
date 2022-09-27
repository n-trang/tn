module.exports = {
  siteMetadata: {
    siteUrl: "https://n-trang.github.io",
    title: "nguyen trang",
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
    'gatsby-transformer-sharp',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
