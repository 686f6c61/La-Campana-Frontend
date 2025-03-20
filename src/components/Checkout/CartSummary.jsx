const CartSummary = ({ items = [] }) => {
    return (
      <section className="bg-gray-100 p-6 rounded-md space-y-4">
        <h4 className="font-bold text-lg">Resumen de la compra</h4>
        {items.map((item, index) => (
          <div key={index} className="border-b py-2">
            <p>{item.name}</p>
            <p className="text-sm">x{item.quantity} ${item.price}</p>
          </div>
        ))}
        <div className="pt-2 border-t">
          <p>Subtotal: $99.000</p>
  
  
          <div className="mt-4 space-y-2">
            <p className="font-semibold">Envío</p>
            <label><input type="radio" name="shipping" /> Envío gratis - Bogotá</label>
            <label><input type="radio" name="shipping" /> Recoger en tienda - Bogotá</label>
          </div>
  
  
          <button className="border border-red-500 text-red-500 rounded-full px-4 py-2 mt-4">
            Terminar compra con un asesor
          </button>
        </div>
      </section>
    );
  };
  
  
  export default CartSummary;
  