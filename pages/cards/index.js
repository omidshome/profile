import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import CardSnack from "../../components/CardSnackbar";
import TouristCard from "../../components/TouristCard";

import T1 from "../../public/TouristIMG/T1.jpg";
import T2 from "../../public/TouristIMG/T2.jpg";
import T3 from "../../public/TouristIMG/T3.jpg";
import T4 from "../../public/TouristIMG/T4.jpg";

const index = () => {
  const [snackFlag, setSnackFlag] = useState(false);
  const [heartStatus, setHeartStatus] = useState(false);

  const snackFlagHandler = () => {
    setSnackFlag(!snackFlag);
  };

  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          component={"h2"}
          dir="rtl"
          fontFamily={"Titr"}
          marginY={"2rem"}
          paddingTop={"2.8rem"}
        >
          تورهای داغ این فصل
        </Typography>
      </Box>
      <Grid
        container
        spacing={12}
        justifyContent={{
          xs: "space-evenly",
          md: "space-evenly",
          lg: "space-between",
        }}
      >
        <TouristCard
          source={T1}
          attractionName={"دروازه برندینگ"}
          snackFlagHandler={snackFlagHandler}
          setHeartStatus={setHeartStatus}
        />
        <TouristCard
          source={T2}
          attractionName={"جنگل سیاه سویس"}
          snackFlagHandler={snackFlagHandler}
          setHeartStatus={setHeartStatus}
        />
        <TouristCard
          source={T3}
          attractionName={"پل طلایی سنفرانسیسکو"}
          snackFlagHandler={snackFlagHandler}
          setHeartStatus={setHeartStatus}
        />
        <TouristCard
          source={T4}
          attractionName={"چشم لندن "}
          snackFlagHandler={snackFlagHandler}
          setHeartStatus={setHeartStatus}
        />
      </Grid>
      {snackFlag && (
        <CardSnack
          snackFlag={snackFlag}
          setSnackFlag={setSnackFlag}
          heartStatus={heartStatus}
        />
      )}
    </Container>
  );
};

export default index;
