import React from "react";
import Heading from "./../atoms/heading";
import InputForm from "./../atoms/input-form";
import "./css/local.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <Heading />
        <InputForm />
      </div>
    );
  }
}

export default ContactForm;
