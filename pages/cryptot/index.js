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

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24"
  );
  const data = await response.json();

  console.log({ data });

  return {
    props: { data },
  };
}
