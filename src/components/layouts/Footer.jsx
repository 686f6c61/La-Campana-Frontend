const Footer = () => {
  return (
    <footer className="w-full bg-lacampana-red2 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Texto del copyright */}
        <p className="text-sm text-center md:text-left">
          Copyright © La Campana Servicios de Acero. Todos los derechos
          reservados.
        </p>

        {/* Botones */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Botón Sedes */}
          <button className="btn btn-secondary bg-white text-red-600 font-medium px-4 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-gray-100">
            Sedes
          </button>

          {/* Botón Hablar con un asesor */}
          <button className="btn btn-outline text-white border-white font-medium px-4 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-700">
            Hablar con un asesor
          </button>

          {/* Botón Solicitar crédito */}
          <button className="btn bg-gray-800 text-white font-medium px-4 py-2 rounded-tl-full rounded-bl-full rounded-tr-full border-none hover:bg-gray-700">
            Solicitar crédito
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
