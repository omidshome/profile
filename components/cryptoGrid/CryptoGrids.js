import { ControlPointDuplicate } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function CryptoGrids({ data }) {
  const coinRows = data.map((coin) => {
    return {
      id: coin.id,
      CoinName: coin.name,
      Price: coin.current_price,
      Icon: coin.image,
      change: coin.market_cap_change_percentage_24h,
    };
  });

  return (
    <Container style={{ height: "80vh", width: "100%" }}>
      <Typography
        variant="h3"
        component={"h1"}
        paddingTop={"5rem"}
        marginBottom={"2.5rem"}
      >
        My favorit Cryptocurrency-Tracker
      </Typography>

      <DataGrid
        pageSize={7}
        columns={[
          {
            field: "Icon",
            headerName: "Icon",
            width: 100,
            renderCell: (value) => {
              return <img src={value.row.Icon} style={{ width: "30px" }} />;
            },
          },
          { field: "CoinName", headerName: "Coin", width: 150 },
          { field: "Price", headerName: "Coin Price", width: 150 },
          { field: "change", headerName: "Last 24 change", width: 300 },
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
