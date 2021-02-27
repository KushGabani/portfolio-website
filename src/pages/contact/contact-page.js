import React from "react";

// Components
import { Cursor } from "./../custom-cursor/cursor";
import Loader from "./../loading-animation/loader";
import FindMeProp from "./atoms/find-me-prop";
import ContactContainer from "./molecules/contact-container";

const ContactPage = () => {
  return (
    <>
      <Cursor />
      <Loader />
      <div style={styles.ContactPageContainer}>
        <FindMeProp />
        <ContactContainer />
      </div>
    </>
  );
};

export default ContactPage;

const styles = {
  ContactPageContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    maxWidth: "2200px",
  },
};
