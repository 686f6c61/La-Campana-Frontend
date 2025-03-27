import React, { useState } from "react";
import { otherAddressFields } from "../../utils/extraSectionsData";
import { departments, cities } from "../../utils/addressOption";
import Register from "../Account/Register";


const FormAddress = ({ address, handleChange, countries, departments, cities, rows }) => {
  const [showOtherAddress, setShowOtherAddress] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);


  const [otherAddress, setOtherAddress] = useState({
    department: "",
    city: "",
    street: "",
    complement: "",
    postalCode: "",
  });


  const handleOtherAddressChange = (e) => {
    const { name, value } = e.target;
    setOtherAddress({ ...otherAddress, [name]: value });
  };


  const renderField = ({ label, name, required, placeholder }) => {
    if (name === "department") {
      return (
        <div key={name} className="w-full">
          <label className="block text-lacampana-gray1 font-semibold text-left">
            {label} {required && <span className="text-lacampana-red2">*</span>}
          </label>
          <select
            name={name}
            value={address[name]}
            onChange={handleChange}
            className="w-full p-3 border border-lacampana-gray3 rounded-lg bg-lacampana-white mb-4"
            required={required}
          >
            <option value="">{placeholder || "Elija una opción"}</option>
            {departments[address.country]?.map((dep) => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>
        </div>
      );
    }
  
  
    if (name === "city") {
      return (
        <div key={name} className="w-full">
          <label className="block text-lacampana-gray1 font-semibold text-left">
            {label} {required && <span className="text-lacampana-red2">*</span>}
          </label>
          <select
            name={name}
            value={address[name]}
            onChange={handleChange}
            className="w-full p-3 border border-lacampana-gray3 rounded-lg bg-lacampana-white mb-4"
            required={required}
            disabled={!address.department}
          >
            <option value="">{placeholder || "Elija una opción"}</option>
            {cities[address.department]?.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      );
    }
  
  
    return (
      <div key={name} className="w-full">
        <label className="block text-lacampana-gray1 font-semibold text-left">
          {label} {required && <span className="text-lacampana-red2">*</span>}
        </label>
        <input
          type="text"
          name={name}
          value={address[name] || ""}
          onChange={handleChange}
          className="w-full p-3 border border-lacampana-gray3 rounded-lg mb-4 bg-lacampana-white"
          required={required}
          placeholder={placeholder || ""}
        />
      </div>
    );
  };
  
  return (
    <div className="bg-lacampana-white p-6 rounded-lg ">
     
      {rows.map((row, idx) => (
        <div
          key={idx}
          className={`grid gap-x-6 gap-y-2 mb-4 ${row.length === 2 ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1"}`}
        >
          {row.map(renderField)}
        </div>
      ))}


      {/* Checkboxes */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showOtherAddress}
            onChange={() => setShowOtherAddress(!showOtherAddress)}
            className="w-4 h-4 "
          />
          <span className="text-lacampana-gray1">Enviar a otra dirección</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showCreateAccount}
            onChange={() => setShowCreateAccount(!showCreateAccount)}
            className="w-4 h-4"
          />
          <span className="text-lacampana-gray1 font-open-sans">Crear una cuenta</span>
        </label>
      </div>


      {/* otra dirección */}
      {showOtherAddress && (
        
        <div className=" rounded-lg bg-lacampana-white  mb-6 ">
          <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
            <th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">
            Enviar a otra dirección
            </th>
          </tr>
        </thead>
      </table>
           
          {/* <h3 className="font-semibold text-lg mb-4 text-lacampana-gray1">Enviar a otra dirección</h3> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left  text-lacampana-gray1">
            {otherAddressFields.map((field) => {
              if (field.type === "select") {
                const options =
                  field.name === "department"
                    ? departments[address.country] || []
                    : cities[otherAddress.department] || [];


                const disabled = field.name === "city" && !otherAddress.department;


                return (
                  <div key={field.name}>
                    <label className="block font-semibold ">{field.label}</label>
                    <select
                      name={field.name}
                      value={otherAddress[field.name]}
                      onChange={handleOtherAddressChange}
                      className="w-full p-3 border border-lacampana-gray3 rounded-lg bg-lacampana-white"
                      disabled={disabled}
                    >
                      <option value="">Seleccione</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }


              return (
                <div key={field.name}>
                  <label className="block font-semibold ">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={otherAddress[field.name]}
                    onChange={handleOtherAddressChange}
                    className="w-full p-3 border border-lacampana-gray3 rounded-lg bg-lacampana-white"
                    placeholder={field.placeholder}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}


    
      {showCreateAccount && (
        <div className="mt-6">
           <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
            <th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">
            Crear cuenta
            </th>
          </tr>
        </thead>
      </table>
           <Register showTitle={false} />
        </div>
      )}
    </div>
  );
};


export default FormAddress;
