import React from "react";
import ContactPage from "../contact-page";

// CSS and Assets
import "./css/local.css";
import Footer from "./../atoms/footer";
import InputForm from "./../atoms/input-form";

const ContactContainer = () => {
  return (
    <div className="right-side-container">
      <div>
        <span className="heading">
          Get in <span style={{ color: "#FD5900" }}>Touch</span>
        </span>
      </div>
      <InputForm />
      <Footer />
    </div>
  );
};

export default ContactContainer;
