import { Grid, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { AccessTime, FavoriteBorderOutlined } from "@mui/icons-material";

import { randomUnitGenerator } from "./RandomGenerator";

const TouristCard = ({ source, attractionName }) => {
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

            <Box>
              <Typography dir="rtl" fontSize={"12px"} fontWeight={"800"}>
                قیمت از 70$
              </Typography>

              <FavoriteBorderOutlined onClick={() => console.log("clicked")} />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default TouristCard;
