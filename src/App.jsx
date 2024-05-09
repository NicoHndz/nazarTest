import { Box } from "@mui/material";
import TicketsManager from "./pages/TicketsManager";

function App() {
  return (
    <Box component={"main"} px={"10em"} bgcolor={"#F8FAFD"} height={"100vh"}>
      <TicketsManager />
    </Box>
  );
}

export default App;
