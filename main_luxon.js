
/* const DateTime = luxon.DateTime;
const fecha =  DateTime.local(2022,5,25,2,00);
let salida =`Día: ${fecha.day} - Mes: ${fecha.month} - Año: ${fecha.year}`;
console.log(salida); */

const hoy = luxon.DateTime;
const fecha = hoy.now();
let salida = fecha.toString();
console.log(salida);