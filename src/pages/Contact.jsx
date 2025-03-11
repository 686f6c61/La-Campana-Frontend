import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactBranches from "../components/contact/ContactBranches";

const Contact = () => {
  return (
    <div className="font-sans">
      <ContactInfo />
      <ContactBranches />
    </div>
    
  );
};

export default Contact;
