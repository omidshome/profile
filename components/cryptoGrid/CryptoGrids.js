import { ControlPointDuplicate } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";

function CryptoGrids({ data }) {
  const coinRows = data.map((coin) => {
    return {
      id: coin.id,
      CoinName: coin.name,
      Price: coin.current_price,
      Icon: coin.image,
    };
  });

  return (
    <Container style={{ height: 250, width: "100%" }}>
      <Typography variant="h3" component={"h1"} paddingTop={"4rem"}>
        My favorit Cryptocurrency-Tracker
      </Typography>

      <DataGrid
        columns={[
          {
            field: "Icon",
            headerName: "Icon",
            width: 100,
            renderCell: (value) => {
              console.log("*****", value.row.Icon);
              return <img src={value.row.Icon} style={{ width: "30px" }} />;
            },
          },
          { field: "CoinName", headerName: "Coin", width: 150 },
          { field: "Price", headerName: "Coin Price", width: 150 },
        ]}
        rows={coinRows}
      />
    </Container>
  );
}

export default CryptoGrids;

// export const imageLoader = ({ src }) => {
//   return <image alt="Crypto Coin" src={`${src}`} style={{ width: "100px" }} />;
// };
