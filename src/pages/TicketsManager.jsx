import { Stack, Typography } from "@mui/material";
import TicketsTable from "../components/TicketsTable";

export default function TicketsManager() {
  return (
    <Stack spacing={"2em"}>
      <Typography
        variant={"h1"}
        fontFamily={"Raleway, sans-serif"}
        fontSize={{ xs: "22px", md: "40px" }}
        fontWeight={"700"}
        color={"primary"}
        align="center"
        width={"100%"}
        pt={{ xs: "1em", lg: "2em" }}
        px={"1em"}
        pb={"2em"}
      >
        Bienvenido
      </Typography>
      <TicketsTable />
    </Stack>
  );
}
