import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticketsSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});
