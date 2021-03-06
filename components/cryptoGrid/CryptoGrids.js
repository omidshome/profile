import { CircularProgress, Typography } from "@mui/material";
import { Container, width } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useSWR from "swr";

function CryptoGrids() {
  const [isLoading, setIsLoading] = useState(true);

  const coinDataFetcher = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24"
    );
    const coinData = await response.json();
    setIsLoading(false);
    return coinData;
  };
  const { data, error } = useSWR("DataGridData", coinDataFetcher);

  if (!data) {
    return (
      <>
        <Container
          sx={{
            textAlign: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Container>
      </>
    );
  }

  if (data) {
    const coinRows = data.map((coin) => {
      return {
        id: coin.id,
        rank: coin.market_cap_rank,
        CoinName: coin.name,
        Price: coin.current_price,
        Icon: coin.image,
        change: `${coin.market_cap_change_percentage_24h} %`,
        symbol: coin.symbol,
      };
    });

    return (
      <Container
        style={{
          height: "70vh",
          width: "80%",
          paddingBottom: "2rem",
        }}
      >
        <DataGrid
          rowHeight={70}
          pageSize={7}
          columns={[
            {
              field: "Icon",
              headerName: "Icon",
              width: 100,
              renderCell: (value) => {
                return <img src={value.row.Icon} style={{ width: "32px" }} />;
              },
            },
            { field: "rank", headerName: "Rank", width: 100 },
            { field: "symbol", headerName: "Symbol", width: 120 },
            { field: "CoinName", headerName: "Coin", width: 150 },
            { field: "Price", headerName: "Coin Price", width: 150 },
            { field: "change", headerName: "Last 24 change", width: 150 },
          ]}
          rows={coinRows ? coinRows : null}
        />
      </Container>
    );
  }
}

export default CryptoGrids;
