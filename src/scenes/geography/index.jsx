import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return (
    <Box m="70px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh" border={`1px solid ${colors.gray[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
