import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  filterTicketsByPriority,
  filterTicketsByState,
  filterTicketsByTitle,
  filterTicketsByType,
} from "../assets/js/filterFunctions";
import { useState } from "react";

export default function DataFilter({ ticketsData, setFilterableData }) {
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");
  const [ticketState, setTicketState] = useState("");

  return (
    <Stack direction={"row"} spacing={"1em"} alignItems={"center"}>
      <Typography
        variant={"h5"}
        fontFamily={"Raleway, sans-serif"}
        fontSize={{ xs: "22px", md: "40px" }}
        fontWeight={"700"}
        color={"primary"}
        align="center"
      >
        Filtros:
      </Typography>
      <TextField
        label="Buscar por titulo"
        onChange={(e) => {
          setFilterableData(filterTicketsByTitle(ticketsData, e.target.value));
        }}
      />
      <FormControl sx={{ width: "120px" }}>
        <InputLabel id="type-label">Tipo</InputLabel>
        <Select
          labelId="type-label"
          value={type}
          label="Tipo"
          onChange={(e) => {
            setType(e.target.value);
            setFilterableData(filterTicketsByType(ticketsData, e.target.value));
          }}
        >
          <MenuItem value={"Todos"}>Todos</MenuItem>
          <MenuItem value={"Técnico"}>Técnico</MenuItem>
          <MenuItem value={"Funcional"}>Funcional</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "120px" }}>
        <InputLabel id="priority-label">Prioridad</InputLabel>
        <Select
          labelId="priority-label"
          value={priority}
          label="Prioridad"
          onChange={(e) => {
            setPriority(e.target.value);
            setFilterableData(
              filterTicketsByPriority(ticketsData, e.target.value)
            );
          }}
        >
          <MenuItem value={"Todas"}>Todas</MenuItem>
          <MenuItem value={"Baja"}>Baja</MenuItem>
          <MenuItem value={"Media"}>Media</MenuItem>
          <MenuItem value={"Alta"}>Alta</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "120px" }}>
        <InputLabel id="state-label">Estado</InputLabel>
        <Select
          labelId="state-label"
          value={ticketState}
          label="Estado"
          onChange={(e) => {
            setTicketState(e.target.value);
            setFilterableData(
              filterTicketsByState(ticketsData, e.target.value)
            );
          }}
        >
          <MenuItem value={"Todos"}>Todos</MenuItem>
          <MenuItem value={"Abierto"}>Abierto</MenuItem>
          <MenuItem value={"Cerrado"}>Cerrado</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
