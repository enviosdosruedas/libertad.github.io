// src/lib/partidos-data.ts
import { equipos } from './equipos-data';

// Función para obtener un equipo aleatorio del array de equipos
const obtenerEquipoAleatorio = () => {
  const indiceAleatorio = Math.floor(Math.random() * equipos.length);
  return equipos[indiceAleatorio].nombre;
};

// Función para generar una fecha aleatoria en las próximas semanas
const generarFechaAleatoria = () => {
  const hoy = new Date();
  const diasEnElFuturo = Math.floor(Math.random() * 21) + 7; // Entre 1 semana y 4 semanas en el futuro
  const fechaFutura = new Date(hoy.setDate(hoy.getDate() + diasEnElFuturo));

  const year = fechaFutura.getFullYear();
  const month = (fechaFutura.getMonth() + 1).toString().padStart(2, '0');
  const day = fechaFutura.getDate().toString().padStart(2, '0');

  const horas = Math.floor(Math.random() * 5) + 15; // Entre las 15:00 y las 19:00
  const minutos = Math.random() < 0.5 ? '00' : '30';

  return `${year}-${month}-${day}T${horas}:${minutos}:00`;
};

const generarLugarAleatorio = () => {
  const lugares = ["Parque Batlle y Ordóñez", "Estadio Municipal", "Cancha del Complejo"];
  const indiceAleatorio = Math.floor(Math.random() * lugares.length);
  return lugares[indiceAleatorio];
};

// Generamos algunos partidos aleatorios
export const partidos = [
  {
    id: '1',
    local: 'CLUB ATLETICO LIBERTAD',
    visitante: obtenerEquipoAleatorio(),
    fecha: generarFechaAleatoria(),
    lugar: generarLugarAleatorio(),
  },
  {
    id: '2',
    local: obtenerEquipoAleatorio(),
    visitante: 'CLUB ATLETICO LIBERTAD',
    fecha: generarFechaAleatoria(),
    lugar: generarLugarAleatorio(),
  },
  {
    id: '3',
    local: 'CLUB ATLETICO LIBERTAD',
    visitante: obtenerEquipoAleatorio(),
    fecha: generarFechaAleatoria(),
    lugar: generarLugarAleatorio(),
  },
  {
    id: '4',
    local: obtenerEquipoAleatorio(),
    visitante: 'CLUB ATLETICO LIBERTAD',
    fecha: generarFechaAleatoria(),
    lugar: generarLugarAleatorio(),
  },
];