import React from "react";

// Components
import Menu from "./../menu/menu-page";
import FindMeProp from "./atoms/find-me-prop";
import ContactContainer from "./molecules/contact-container";

const ContactPage = () => {
  return (
    <div className="app-wrapper alignCenter">
      <div style={styles.ContactPageContainer}>
        <Menu page="CONTACT" />
        <FindMeProp />
        <ContactContainer />
      </div>
    </div>
  );
};

export default ContactPage;

const styles = {
  ContactPageContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    maxWidth: "2200px",
  },
};
