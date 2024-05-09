import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  orderTicketsByDateAsc,
  orderTicketsByDateDesc,
} from "../assets/js/filterFunctions";
import DataFilter from "./DataFilter";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TicketCreator from "./TicketCreator";
import TicketEditor from "./TicketEditor";

export default function TicketsTable() {
  const ticketsData = useSelector((state) => state.tickets);
  const [filterableData, setFilterableData] = useState(ticketsData);
  const columns = Object.keys(ticketsData[0]);

  useEffect(() => {
    setFilterableData(ticketsData);
  }, [ticketsData]);

  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <DataFilter
          ticketsData={ticketsData}
          setFilterableData={setFilterableData}
        />
        <TicketCreator />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell key={item} sx={{ color: "primary.main" }}>
                  {item === "Fecha" ? (
                    <>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() =>
                          setFilterableData(
                            orderTicketsByDateAsc(filterableData)
                          )
                        }
                      >
                        <KeyboardArrowUpIcon />
                      </IconButton>
                      {item}
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() =>
                          setFilterableData(
                            orderTicketsByDateDesc(filterableData)
                          )
                        }
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>{item}</>
                  )}
                </TableCell>
              ))}
              <TableCell sx={{ color: "primary.main" }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterableData.map((ticket) => (
              <TableRow
                key={ticket.Titulo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ticket.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {ticket.Titulo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {ticket.Descripción}
                </TableCell>
                <TableCell component="th" scope="row">
                  {ticket.Tipo}
                </TableCell>
                <TableCell component="th" scope="row">
                  {ticket.Fecha}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color:
                      ticket.Prioridad === "Alta"
                        ? "red"
                        : ticket.Prioridad === "Media"
                        ? "#E49B0F"
                        : "green",
                  }}
                >
                  {ticket.Prioridad}
                </TableCell>
                <TableCell component="th" scope="row">
                  {ticket.Estado}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  {ticket.Estado !== "Cerrado" && (
                    <TicketEditor id={ticket.id} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
