import React from "react";
import axios from "axios";
import CryptoGrids from "../../components/cryptoGrid/CryptoGrids";

const Crypto = ({ data }) => {
  return (
    <>
      {/* {data.map((data) => {
        return <h3 key={data.id}>{data.name}</h3>;
      })} */}
      <CryptoGrids data={data} />
    </>
  );
};

export default Crypto;

export async function getStaticProps() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24"
  );

  const data = await response.json();
  console.log({ data });

  return {
    props: { data },
  };
}
