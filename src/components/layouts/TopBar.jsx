const TopBar = () => {
  return (
    <div className="bg-white text-black text-sm py-2 px-4 flex justify-between">
      <span>Free Shipping on Orders Over $50</span>
      <span></span>
      <div className="flex items-center gap-4">
        <button className="hover:text-gray-200">📍 Bogotá</button>
        <button className="hover:text-gray-200">Comprar Ahora</button>
        <button className="hover:text-gray-200">❤️</button>
        <button className="hover:text-gray-200">🛒</button>
      </div>
    </div>
    
  );
};

export default TopBar;
