require("dotenv").config();

module.exports = {
  pathPrefix: "/portfolio-website",
  siteMetadata: {
    siteUrl: "https://kushgabani.github.io/portfolio-website",
    name: "Kush Gabani",
    description: `Hello World, I’m a software engineer specializing in training Deep
            Learning Models and creating web solutions. Currently, I’m focused
            on creating easy-to-access deep learning models for real-life use
            cases exposed over the internet.`,
    tag: "making difference, one app at a time",
    mail: "kushgabz2687@gmail.com",
    github: "https://github.com/KushGabani",
    linkedin: "https://www.linkedin.com/in/kush-gabani-910b521b0/",
    instagram: "https:///www.instagram.com/kush.gab",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-smoothscroll",
      "gatsby-plugin-anchor-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#FD5900",
        // Height of the scroll indicator
        height: "3px",
        // Configure paths where the scroll indicator will appear
        paths: ["/**"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
  ],
};
