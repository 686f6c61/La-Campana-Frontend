import { useState } from "react";
import NaturalForm from "./NaturalForm";
import JuridicaForm from "./JuridicaForm";
import RadioSelect from "../common/RadioSelect";


const CheckoutForm = () => {
  const [selectedType, setSelectedType] = useState("natural");


  const handleSelection = (option) => {
    setSelectedType(option === "Persona Jurídica" ? "juridica" : "natural");
  };


  return (
    <section className="bg-white p-6 rounded-md space-y-6 w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
            <th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">
              Detalles del Pedido
            </th>
          </tr>
        </thead>
      </table>

      <div className="pl-10">

        <RadioSelect

          options={["Persona Natural", "Persona Jurídica"]}
          selectedOption={selectedType === "natural" ? "Persona Natural" : "Persona Jurídica"}
          onSelectionChange={handleSelection}
          bgColor="red"
          borderColor="red"
          textColor="lacamapana-gray1"
          labelClassName="font-open-sans text-base"


        /></div>



      {selectedType === "natural" ? <NaturalForm /> : <JuridicaForm />}
    </section>
  );
};


export default CheckoutForm;
