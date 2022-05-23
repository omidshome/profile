import { Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { AccessTime } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { pink } from "@mui/material/colors";

import { randomUnitGenerator } from "./RandomGenerator";
import { useState } from "react";

const TouristCard = ({ source, attractionName }) => {
  const [heart, setHeart] = useState(false);

  const toggleHeart = () => {
    setHeart(!heart);
  };

  const theme = createTheme({
    typography: {
      dir: "rtl",
      fontFamily: ["Vazir"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} lg={4} md={6}>
        <Paper elevation={5} sx={{ width: "250px" }}>
          <Image
            placeholder="blur"
            src={source}
            width={250}
            height={125}
            alt="Trousit attraction"
          />
          <Box sx={{ padding: "5px" }}>
            <Typography dir="rtl" variant="h5" component="h2" fontSize={"22px"}>
              {attractionName}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "10px",
              }}
            >
              <Typography dir="rtl" paddingRight={"8px"}>
                حدود 10 روز
              </Typography>
              <AccessTime color="secondary" fontSize="small" />
            </Box>
            <Rating
              size="small"
              name="city-rating"
              defaultValue={randomUnitGenerator(1, 5)}
              precision={0.5}
              readOnly
            />

            <Typography dir="rtl" fontSize={"12px"} fontWeight={"800"}>
              قیمت از 70$
            </Typography>
          </Box>

          {heart && (
            <FavoriteIcon sx={{ color: pink[500] }} onClick={toggleHeart} />
          )}
          {!heart && <FavoriteBorderOutlinedIcon onClick={toggleHeart} />}
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default TouristCard;
