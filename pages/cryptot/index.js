import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import CryptoGrids from "../../components/cryptoGrid/CryptoGrids";

const Crypto = ({ data }) => {
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          component={"h1"}
          paddingTop={"5rem"}
          marginBottom={"2.5rem"}
          sx={{ fontFamily: "Courgette" }}
        >
          My favorite Cryptocurrency-Tracker
        </Typography>

        <CryptoGrids data={data} />
      </Container>
    </>
  );
};

export default Crypto;
