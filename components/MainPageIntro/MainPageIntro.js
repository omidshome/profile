import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Avatar, Grid, Typography } from "@mui/material";

import bgg from "./Background.module.css";

export default function IntroPaper() {
  return (
    <Box
      mb={"3rem"}
      justifyContent={"center"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "80vw",
          paddingLeft: "1.2rem",
        },
      }}
    >
      <Paper elevation={5}>
        <Grid container direction="row" mt={"1.2rem"}>
          <Avatar
            src="avatar.jpg "
            alt="Omid Abdi"
            sx={{ width: 56, height: 56 }}
          />
          <Typography
            variant="h5"
            //   fontSize={"2rem"}
            component={"h2"}
            mt={"1.5rem"}
            mb={"1.5rem"}
            pl={"1.7rem"}
            fontFamily={"segoe print"}
          >
            A bit about me
          </Typography>
        </Grid>
        <Typography
          fontSize={"18px"}
          component={"p"}
          padding={"1.9rem"}
          ml={"1.2rem"}
          lineHeight={1.8}
          fontFamily={"segoe print"}
          sx={{ wordSpacing: "8px" }}
        >
          Hello fellows, my name is Omid Abdi. I am a big fan of web development
          technologies. Although I've recently started learning new things such
          as HTML, CSS, jQuery, Material UI, BootStrap, JavaScript, ReactJS,
          NextJs etc, I do believe I have a great potential with this area. I
          love JavaScript so try to enhance my JS programming skill on a daily
          basis. I thoroughly enjoy learning computer related topics and hope
          one day to become a skillful full-stack developer.
        </Typography>
      </Paper>
    </Box>
  );
}
