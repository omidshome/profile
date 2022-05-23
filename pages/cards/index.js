import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TouristCard from "../../components/TouristCard";

import T1 from "../../public/TouristIMG/T1.jpg";
import T2 from "../../public/TouristIMG/T2.jpg";
import T3 from "../../public/TouristIMG/T3.jpg";
import T4 from "../../public/TouristIMG/T4.jpg";

const index = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <TouristCard source={T1} attractionName={"دروازه برندینگ"} />
        <TouristCard source={T2} attractionName={"جنگل سیاه سویس"} />
        <TouristCard source={T3} attractionName={"پل طلایی سنفرانسیسکو"} />
        <TouristCard source={T4} attractionName={"چشم لندن "} />
      </Grid>
    </Container>
  );
};

export default index;
