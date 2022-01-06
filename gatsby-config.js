require("dotenv").config();

module.exports = {
  pathPrefix: "/portfolio-website",
  siteMetadata: {
    siteUrl: "https://kushgabani.github.io/portfolio-website",
    name: "Kush Gabani",
    description: `Hello World, I’m a Software Engineer whose current foci
                  is ML/DL and MERN stack. I aspire to create
                  solutions for real-world problems using web technologies and deep learning models.`,
    tag: "making difference, one app at a time",
    mail: "kushgabz2687@gmail.com",
    github: "https://github.com/KushGabani",
    linkedin: "https://www.linkedin.com/in/kush-gabani-910b521b0/",
    instagram: "https:///www.instagram.com/kush.gab",
    pinterest: "https://in.pinterest.com/kushgabz2687/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
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
