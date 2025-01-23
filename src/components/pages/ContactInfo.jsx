import React from "react";
import Form from "../common/Form";
import Map from "../common/Map";
import CircularImageEffect from "../common/CircularImgEffect/CircularImgEffect";

const ContactInfo = () => {
  return (
    <div className="font-sans">
      <Form />
      <Map />
      <CircularImageEffect imageUrl="/images/contacto.jpeg" />
    </div>
  );
};

export default ContactInfo;
