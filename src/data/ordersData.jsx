const ordersData = [
  {
    id: "LC25874569871365",
    date: "Enero 15, 2025",
    status: "Completado",
    items: [
      {
        product:
          "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
        quantity: 1,
        total: 19693,
      },
      {
        product: "Tubo Mueble Redondo Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
        quantity: 3,
        total: 59079,
      },
      {
        product: "Tubo Mueble otro Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
        quantity: 1,
        total: 19693,
      },
    ],
    subtotal: 98465,
    shippingCost: 35000,
    paymentMethod: "Visa terminada en 3887",
    total: 133465,
    shippingAddress: {
      name: "Nombre de empresa o cliente",
      address: "Calle 16 4-25, Bogotá D.C.",
      zipCode: "1100001",
      city: "Colombia",
      country: "Colombia",
      email: "correo@correo.com",
    },
  },
  {
    id: "LC25874569871366",
    date: "Febrero 10, 2025",
    status: "Pendiente",
    items: [
      { product: "Silla ergonómica de oficina", quantity: 2, total: 50000 },
      { product: "Mesa de madera", quantity: 1, total: 120000 },
    ],
    subtotal: 170000,
    shippingCost: 20000,
    paymentMethod: "Mastercard terminada en 1234",
    total: 190000,
    shippingAddress: {
      name: "Empresa XYZ",
      address: "Av. Siempre Viva 742, Buenos Aires",
      zipCode: "1425",
      city: "Argentina",
      country: "Argentina",
      email: "contacto@empresa.com",
    },
  },
];

export default ordersData;
