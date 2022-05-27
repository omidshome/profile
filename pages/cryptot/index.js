import React, { useState } from "react";
import axios from "axios";
import CryptoGrids from "../../components/cryptoGrid/CryptoGrids";

const Crypto = ({ data }) => {
  const router = useRouter();
  const [updatedData, setupdatedData] = useState(data);

  return (
    <>
      <CryptoGrids data={updatedData} />
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
