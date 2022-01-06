import scrollTo from "gatsby-plugin-smoothscroll";
import {
  FaAdjust,
  FaArchive,
  FaAtom,
  FaComments,
  FaPaperPlane,
  FaPhone,
  FaRobot,
  FaUserAstronaut,
} from "react-icons/fa";
import { colors } from "../Colors";
import { navigate } from "gatsby";
import * as React from "react";

const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    icon: <HomeIcon />,
    subtitle: "Portfolio's landing page",
    section: "Navigation",
    keywords: "landing page",
    perform: () => scrollTo("#home"),
  },
  {
    id: "work",
    name: "Work",
    shortcut: ["w"],
    icon: (
      <FaRobot
        size={"20px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    subtitle: "Collection of projects",
    section: "Navigation",
    keywords: "My Projects",
    perform: () => scrollTo("#work"),
  },
  {
    id: "archive",
    name: "Project Archive",
    shortcut: ["p", "a"],
    icon: (
      <FaArchive
        size={"16px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    subtitle: "Archive of all projects since 2017",
    section: "Navigation",
    keywords: "Project Archive",
    perform: () => navigate("/archive"),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    icon: (
      <FaUserAstronaut
        size={"16px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    subtitle: "More about me",
    section: "Navigation",
    keywords: "About Me",
    perform: () => scrollTo("#about"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    section: "Navigation",
    icon: (
      <FaComments
        size={"18px"}
        style={{ color: colors.black, marginLeft: "3px" }}
      />
    ),
    subtitle: "Reach out. Let's talk about your next project",
    keywords: "Contact Information",
    perform: () => scrollTo("#contact"),
  },
  {
    id: "resume",
    name: "Resume",
    icon: (
      <FaAtom
        size={"16px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    subtitle: "kushgabz2687@gmail.com",
    section: "Essentials",
    perform: () => {
      document.getElementById("resume").click();
    },
  },
  {
    id: "email",
    name: "Email",
    icon: (
      <FaPaperPlane
        size={"16px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    subtitle: "kushgabz2687@gmail.com",
    section: "Essentials",
    perform: () =>
      window !== undefined ? window.open("mailto:kushgabz2687@gmail.com") : "",
  },

  {
    id: "phone",
    name: "Phone",
    icon: (
      <FaPhone
        size={"16px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    subtitle: "+91 814024500",
    section: "Essentials",
  },
  {
    id: "theme",
    name: "Dark/Light Mode",
    icon: (
      <FaAdjust
        size={"16px"}
        style={{ color: colors.black, marginLeft: "4px", marginRight: "3px" }}
      />
    ),
    section: "Utilities",
  },
];

export default actions;

function HomeIcon() {
    return (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m19.681 10.406-7.09-6.179a.924.924 0 0 0-1.214.002l-7.06 6.179c-.642.561-.244 1.618.608 1.618.51 0 .924.414.924.924v5.395c0 .51.414.923.923.923h3.236V14.54c0-.289.234-.522.522-.522h2.94c.288 0 .522.233.522.522v4.728h3.073c.51 0 .924-.413.924-.923V12.95c0-.51.413-.924.923-.924h.163c.853 0 1.25-1.059.606-1.62Z"
                fill={colors.black}
            />
        </svg>
    );
}