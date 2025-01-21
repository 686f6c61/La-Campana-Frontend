const TopBar = () => {
  return (
    <div className="bg-white text-black text-sm py-2 px-4 flex justify-between">
      <div>
        <span>Free Shipping on Orders Over $50</span>
        <span></span>
      </div>
      <div >
        <button className="btn btn-xs bg-grey text-white">Ciudad</button>
        <button className="btn btn-xs btn-color text-white">Comprar Ahora</button>
        <button className="btn btn-xs bg-grey text-white">Encontranos en</button>
      </div>

    </div>


  );
};

export default TopBar;
