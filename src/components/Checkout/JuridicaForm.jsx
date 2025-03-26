import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormAddress from "./FormAddress";
import { countries, departments, cities } from "../../utils/addressOption";




const JuridicaForm = () => {
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
      { label: "Razón Social", name: "name", required: true, placeholder: "Su razón social" },
      { label: "NIT", name: "streetAddress", required: true, placeholder: "Su NIT          " },
    ],
    [ // Fila 2
      { label: "Nombre completo", name: "lastname", required: true, placeholder: "Nombre actual de la empresa" },
    ],
    [ // Fila 3
      { label: "Correo electrónico", name: "company", required: true, placeholder: "correo@actual.com" },
    ],
    [ // Fila 4
      { label: "Teléfono de contacto", name: "phone", required: true, placeholder: "Escriba un número de celular o telefóno" },
    ],
    [ // Fila 5
      { label: "Departamento de Colombia", name: "department", required: true, },
      { label: "Ciudad", name: "city", required: true },
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
<th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">Persona Jurídica</th>
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


export default JuridicaForm;
