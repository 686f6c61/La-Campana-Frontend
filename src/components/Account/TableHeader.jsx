const TableHeader = ({ isMobile = false }) => {
    return isMobile ? (
      <div className="w-[140px] mt-5 transform -translate-x-8 bg-lacampana-gray1 text-left font-antonio  rounded-bl-xl rounded-tr-xl rounded-br-xl p-4 ">
        <div className="flex flex-col space-y-2">
          <p className="text-base pb-2 text-lacampana-white font-antonio border-b-1 border-b-[1px] border-lacampana-white">Número de orden</p>
          <p className="text-base pb-2 text-lacampana-white font-antonio border-b-1 border-b-[1px] border-lacampana-white">Fecha de compra</p>
          <p className="text-base pb-2 text-lacampana-white font-antonio border-b-1 border-b-[1px] border-lacampana-white">Estado del pedido</p>
          <p className="text-base pb-2 text-lacampana-white font-antonio border-b-1 border-b-[1px] border-lacampana-white">Total</p>
          <p className="text-base text-lacampana-white font-antonio border-b-1 ">Detalles</p>
        </div>
      </div>
    ) : (
      <thead className="hidden md:table-header-group">
        <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
          <th className="text-xl p-4 text-center">Número de orden</th>
          <th className="text-xl p-4 text-center">Fecha de compra</th>
          <th className="text-xl p-4 text-center">Estado del pedido</th>
          <th className="text-xl p-4 text-center">Total</th>
          <th className="text-xl p-4 text-center">Detalles</th>
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;
  