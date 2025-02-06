const formatDate = (inputDate) => {
  const fecha = new Date(inputDate);

  // Formatear la fecha
  const dia = fecha.getDate(); // Día
  const mes = fecha.getMonth() + 1; // Mes (0 = enero, por eso se suma 1)
  const año = fecha.getFullYear(); // Año

  // Mostrar en formato "DD/MM/YYYY"
  const formatedDate = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${año}`;

  return formatedDate
}

export default formatDate