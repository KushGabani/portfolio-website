import React from "react";
import FindMeProp from "./atoms/findme-prop";
import ContactForm from "./molecules/contact-form";
import Footer from "./molecules/footer";
import { Cursor } from "./../custom-cursor/cursor";
import MenuPage from "./../menu/menu-page";
import "./../global-css/basics.css";

class ContactPage extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <Cursor />
        <MenuPage page="CONTACT" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <FindMeProp />
          <div
            style={{
              flexDirection: "column",
              width: "100%",
            }}
          >
            <ContactForm />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
