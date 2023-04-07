require("dotenv").config();

module.exports = {
  pathPrefix: "/portfolio-website",
  siteMetadata: {
    siteUrl: "https://kushgabani.github.io/portfolio-website",
    name: "Kush Gabani",
    description: `Hello World, I’m a Full Stack Developer and I love to build
                  products for Web and Mobile that inspire people and solve seemingly difficult
                  problems with ease.`,
    tag: "making difference, one application a time",
    mail: "kushgabz2687@gmail.com",
    github: "https://github.com/KushGabani",
    linkedin: "https://www.linkedin.com/in/kushgabani/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
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
