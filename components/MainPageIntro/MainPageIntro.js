import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

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
        <Typography variant="h3" component={"h2"} mt={"1.5rem"} mb={"1.5rem"}>
          A bit about me
        </Typography>
        <Typography variant="h5" component={"h3"} fontStyle={"italic"}>
          Hello fellows, my name is Omid Abdi. I used to be a teacher,
        </Typography>
      </Paper>
    </Box>
  );
}
