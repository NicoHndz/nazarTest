import {
  Backdrop,
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketsSlice";

export default function TicketCreator() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      Titulo: title,
      Tipo: type,
      Fecha: date,
      Prioridad: priority,
      Descripción: description,
    };
    dispatch(addTicket(newTicket));
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Nuevo Ticket
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Stack
          component={"form"}
          onSubmit={(e) => handleSubmit(e)}
          borderRadius={"30px"}
          bgcolor={"white"}
          alignItems={"center"}
          spacing={"2em"}
          width={{
            xs: "350px ",
            sm: "450px",
            md: "600px",
            lg: "500px",
            xl: "600px",
          }}
          p={"3em"}
        >
          <Stack
            component={"div"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Typography
              variant={"h5"}
              fontFamily={"Raleway, sans-serif"}
              fontSize={{ xs: "22px", md: "40px" }}
              fontWeight={"700"}
              color={"primary"}
              align="center"
            >
              Crear ticket
            </Typography>
            <IconButton onClick={handleClose} color="primary">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack
            component={"div"}
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            spacing={"1em"}
          >
            <TextField
              label="Titulo"
              sx={{ width: "100%" }}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="type-label">Tipo</InputLabel>
              <Select
                labelId="type-label"
                value={type}
                label={"Tipo"}
                required
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <MenuItem value={"Técnico"}>Técnico</MenuItem>
                <MenuItem value={"Funcional"}>Funcional</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            component={"div"}
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            spacing={"1em"}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              alignItems={"center"}
              spacing={"2em"}
            >
              <Typography variant="body1" color={"black"}>
                Fecha:
              </Typography>
              <Input
                type="date"
                sx={{ width: "100%" }}
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Stack>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="priority-label">Prioridad</InputLabel>
              <Select
                labelId="priority-label"
                value={priority}
                label={"Prioridad"}
                required
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                <MenuItem value={"Baja"}>Baja</MenuItem>
                <MenuItem value={"Media"}>Media</MenuItem>
                <MenuItem value={"Alta"}>Alta</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack component={"div"} direction={"row"} width={"100%"}>
            <TextField
              label="Descripción"
              multiline
              rows={4}
              fullWidth
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Stack>
          <Button variant="contained" type="submit">
            agregar
          </Button>
        </Stack>
      </Backdrop>
    </>
  );
}
