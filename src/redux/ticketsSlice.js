import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    Titulo: "Establecer rutas",
    Descripción:
      "Definicion de trayectos y disponibilidad de estos en dispositivos GPS",
    Tipo: "Técnico",
    Fecha: "2024-05-11",
    Prioridad: "Baja",
    Estado: "Abierto",
  },
  {
    id: 2,
    Titulo: "Gestionar cargamento",
    Descripción:
      "Preparacion de cargamentos para distintos puntos de recepcion",
    Tipo: "Técnico",
    Fecha: "2024-05-09",
    Prioridad: "Alta",
    Estado: "Abierto",
  },
  {
    id: 3,
    Titulo: "Proporcionar logistica",
    Descripción:
      "Establecimiento de tiempos y recursos necesarios para el transporte",
    Tipo: "Funcional",
    Fecha: "2024-05-10",
    Prioridad: "Media",
    Estado: "Cerrado",
  },
];

export const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      const id = state.length + 1;
      state.push({ id, ...action.payload, Estado: "Abierto" });
    },
    editTicket: (state, action) => {
      const updatedTicket = action.payload;
      const ticketToEdit = state.find(
        (ticket) => ticket.id === updatedTicket.id
      );
      if (ticketToEdit) {
        ticketToEdit.Titulo = updatedTicket.Titulo;
        ticketToEdit.Tipo = updatedTicket.Tipo;
        ticketToEdit.Fecha = updatedTicket.Fecha;
        ticketToEdit.Prioridad = updatedTicket.Prioridad;
        ticketToEdit.Descripción = updatedTicket.Descripción;
      }
    },
    ticketCloser: (state, action) => {
      const closeTicketInfo = action.payload;
      const ticketToClose = state.find(
        (ticket) => ticket.id === closeTicketInfo.id
      );
      if (ticketToClose) {
        ticketToClose.Estado = closeTicketInfo.Estado;
      }
    },
  },
});

export const { addTicket, editTicket, ticketCloser } = ticketSlice.actions;
export default ticketSlice.reducer;
