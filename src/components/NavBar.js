import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import Link from "gatsby-link";

const NavBar = () => (
  <NavWrapper>
    <Link to={"/"}>
      <Logo>
        K<span style={{ textDecoration: "underline" }}>G</span>
      </Logo>
    </Link>
    <Menu>
      <MenuItem>
        .work<Accent>()</Accent>
      </MenuItem>
      <MenuItem>
        .about<Accent>()</Accent>
      </MenuItem>
      <MenuItem>
        .contact<Accent>()</Accent>
      </MenuItem>
    </Menu>
  </NavWrapper>
);

export default NavBar;

const NavWrapper = styled.div`
  padding: 2rem 6rem;
  margin: 0 auto;
  max-width: 1807px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f1f1f;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Logo = styled.div`
  color: ${colors.white};
  font-size: 2.5rem;
  font-style: normal;
  font-weight: normal;

  @media only screen and (max-width: 375px) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: 1.3rem;

  @media only screen and (max-width: 375px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const MenuItem = styled.li`
  margin-left: 4rem;

  &:nth-child(1) {
    margin-left: 0;
  }

  @media only screen and (max-width: 375px) {
    margin-left: 0 !important;
    margin-top: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const Accent = styled.span`
  color: ${colors.orange};
`;
