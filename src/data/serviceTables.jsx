const serviceTables = {
    1: {
      headers: ["Producto", "Referencia", "Longitud mínima", "Longitud máxima"],
      data: [
        ["HEA", "100 a 600", "1000mm", "12000mm"],
        ["IPE", "80 a 600", "1000mm", "12000mm"]
      ]
    },
    2: {
      headers: ["Producto", "Rango de espesor", "Medida 1", "Medida 2", "Medida 3", "Medida 4"],
      data: [
        ["Planchas 8’ x 20’", "12,0 a 100,0mm", "1220 x 2440mm (4’x8’)", "2440 x 2440mm (8’x8’)", "3660 x 2440mm (12’x8’)", "4880 x 2440mm (16’x8’)"]
      ]
    },
    3: {
      headers: [
        "Producto",
        "Rango de espesor",
        "Longitud mínima",
        "Longitud máxima",
        "Máx. ancho de bobina",
        "Máx. peso de bobina",
      ],
      data: [
        ["Aceitada y Decapada", "2.50 - 6.00mm", "1000mm", "6000mm", "1220mm", "10000kg"],
        ["Alfajor", "2.00 - 6.00mm", "1000mm", "6000mm", "1220mm", "10000kg"],
        ["Aluzinc", "0.30 - 3.00mm", "1000mm", "6000mm", "1220mm", "16000kg"],
        ["Cold Rolled", "0.40 - 2.00mm", "1000mm", "6000mm", "1220mm", "16000kg"],
        ["Galvanizada", "0.40 - 1.20mm", "1000mm", "6000mm", "1220mm", "16000kg"],
        ["Hot Rolled", "1.20 - 12.00mm", "2000mm", "12000mm", "1500mm", "16000kg"],
        ["Plancha", "4.50 - 12.00mm", "2000mm", "12000mm", "1830mm", "16000kg"],
      ],
    },

    4: {
    headers: [
      "Producto",
      "Rango de espesor",
      "Min. ancho de fleje",
      "Máx. ancho de bobina",
      "Máx. peso de bobina",
    ],
    data: [
      ["Aceitada y Decapada", "2,50 - 3,00mm", "80mm", "1300mm", "16000kg"],
      ["Aluzinc", "0,30 - 3,00mm", "80mm", "1300mm", "16000kg"],
      ["Cold Rolled", "0,40 - 2,00mm", "80mm", "1300mm", "16000kg"],
      ["Galvanizada", "0,30 - 3,00mm", "80mm", "1300mm", "16000kg"],
      ["Hot Rolled", "1,20 - 3,00mm", "80mm", "1300mm", "16000kg"],
    ],
  }
};

  
  

  
  
  export default serviceTables;
  