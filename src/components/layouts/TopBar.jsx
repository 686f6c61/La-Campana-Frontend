const TopBar = () => {
  return (
    <div className="bg-white text-black text-sm py-2 px-4 flex justify-between">
      <div>
        <span>Free Shipping on Orders Over $50</span>
        <span></span>
      </div>
      <div >
      <button className= "btn btn-xs text-white bg-lacampana-gray1 rounded-tl-full rounded-bl-full rounded-tr-full ">
              Ciudad
            </button>
            
        <button className="btn btn-xs text-white bg-lacampana-gray1 rounded-tl-full rounded-bl-full rounded-tr-full ">Comprar Ahora</button>
        <button className="btn btn-xs text-white bg-lacampana-gray1 rounded-tl-full rounded-bl-full rounded-tr-full ">Encontranos en</button>
      </div>

    </div>


  );
};

export default TopBar;
