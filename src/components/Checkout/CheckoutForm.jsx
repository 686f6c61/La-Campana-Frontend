const CheckoutForm = () => {
    return (
      <section className="bg-gray-100 p-6 rounded-md space-y-4">
        <div className="flex gap-4">
          <button className="border border-gray-400 px-4 py-2 rounded-full">Persona Natural</button>
          <button className="border border-gray-400 px-4 py-2 rounded-full">Persona Jurídica</button>
        </div>
  
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Nombres *" className="input-style" />
          <input placeholder="Apellidos *" className="input-style" />
          <input placeholder="Documento de identidad" className="input-style" />
          <input placeholder="Correo electrónico *" className="input-style" />
          <input placeholder="Teléfono de contacto *" className="input-style" />
          <select className="input-style"><option>Departamento de Colombia *</option></select>
          <select className="input-style"><option>Ciudad *</option></select>
          <input placeholder="Dirección *" className="input-style" />
          <input placeholder="Complementa la dirección" className="input-style" />
          <input placeholder="Código Postal" className="input-style" />
        </div>
  
  
        <div className="flex gap-4">
          <label><input type="checkbox" /> Enviar a otra dirección</label>
          <label><input type="checkbox" /> Crear una cuenta</label>
        </div>
      </section>
    );
  };
  
  
  export default CheckoutForm;
  