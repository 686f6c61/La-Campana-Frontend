const QuantitySelector = ({amountOfProduct, setAmountOfProduct}) => {

  const increase = () => setAmountOfProduct(prev => prev + 1);
  const decrease = () => setAmountOfProduct(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={decrease} 
        className="bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
        -
      </button>
      <input 
        type="number" 
        value={amountOfProduct} 
        readOnly 
        className="w-12 text-center border border-gray-300 rounded-md" 
      />
      <button 
        onClick={increase} 
        className="bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
