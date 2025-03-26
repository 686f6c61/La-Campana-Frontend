import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormAddress from "./FormAddress";
import { countries, departments, cities } from "../../utils/addressOption";





const NaturalForm = () => {
  const { addressId } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    id: "",
    name: "",
    lastname: "",
    company: "",
    phone: "",
    streetAddress: "",
    complement: "",
    complement2: "",
    country: "",
    department: "",
    city: "",
    postalCode: "",
  });


  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    const foundAddress = storedAddresses.find((addr) => addr.id === addressId);
    if (foundAddress) setAddress(foundAddress);
  }, [addressId]);


  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    const index = storedAddresses.findIndex((addr) => addr.id === addressId);
    if (index !== -1) {
      storedAddresses[index] = address;
    } else {
      storedAddresses.push({ ...address, id: addressId || new Date().getTime().toString() });
    }
    localStorage.setItem("addresses", JSON.stringify(storedAddresses));
    navigate("/micuenta/direcciones");
  };


  const rows = [
    [
      { label: "Nombre", name: "name", required: true, placeholder: "Nombre actual"},
      { label: "Apellidos", name: "lastname", required: true, placeholder: "Apellido actual" },
    ],
    [ 
      { label: "Documento de identidad", name: "company", required: false, placeholder: "Su numero de identidad" },
    ],
    [ 
      { label: "Teléfono de contacto", name: "phone", required: true, placeholder: "Escriba un número de celular o telefóno" },
    ],
    [ 
      { label: "Correo electrónico", name: "complement2", required: false, placeholder: "correo@actual.com" },
    ],
    [
      { label: "Departamento de Colombia", name: "department", required: true, placeholder: "Elija una opción..." },
      { label: "Ciudad", name: "city", required: true , placeholder: "Elija una opción..."},
    ],
    [ 
      { label: "Dirección", name: "streetAddress", required: true , placeholder: "Dirección completa" },
    ],
    [ 
      { label: "Complete la dirección", name: "complement", required: false, placeholder: "Casa o apartado / # de apartamento" },
      { label: "Código Postal", name: "postalCode", required: true, placeholder: "Escriba código postal" },
    ],
    
    
  ];


  return (
    <>
        <table className=" w-full text-left border-collapse ">
<thead>
<tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
<th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">Persona Natural</th>
</tr>



    </thead></table>
      <form onSubmit={handleSubmit}>
        <FormAddress
          address={address}
          handleChange={handleChange}
          countries={countries}
          departments={departments}
          cities={cities}
          rows={rows}
        />




        
      </form>
    </>
  );
};


export default NaturalForm;
