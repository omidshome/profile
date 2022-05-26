import { ControlPointDuplicate } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function CryptoGrids({ data }) {
  const coinRows = data.map((coin) => {
    return { id: coin.id, CoinName: coin.name, Price: coin.current_price };
  });

  console.log("**************", { coinRows });

  return (
    <Container style={{ height: 250, width: "100%" }}>
      <Typography variant="h3" component={"h1"} paddingTop={"4rem"}>
        My favorit Cryptocurrency-Tracker
      </Typography>

      <DataGrid
        columns={[
          { field: "coinImage", headerName: "", width: 70 },
          { field: "CoinName", headerName: "Coin", width: 150 },
          { field: "Price", headerName: "Coin Price", width: 150 },
        ]}
        rows={coinRows}
      />
    </Container>
  );
}

export default CryptoGrids;
