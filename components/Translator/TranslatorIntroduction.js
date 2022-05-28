import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Container } from "@mui/system";
import { OutlinedInput, Stack } from "@mui/material";
import { useState } from "react";
import Converter from "./Converter";

const Introduction = () => {
  const [language, setLanguge] = useState("fa");
  const [text, setText] = useState(
    "Hllo guys, my name is Omid Abdi. I'm really love web development. Here, you can see some of my works"
  );

  const handleChange = (event) => {
    setLanguge(event.target.value);
  };
  return (
    <Box sx={{ marginBottom: "3rem", boxShadow: "15px 15px 15px lightGrey" }}>
      <Stack
        sx={{
          marginRight: "auto",
          width: "100%",
          marginTop: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        <FormControl fullWidth sx={{ marginBottom: "2.5rem" }}>
          <OutlinedInput
            placeholder="You can type here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>

        <FormControl
          sx={{ width: "120px", marginLeft: "auto", paddingRight: "10px" }}
        >
          <InputLabel id="language-select">زبان</InputLabel>
          <Select
            labelId="language-select"
            id="language-select"
            value={language}
            label="language-select"
            onChange={handleChange}
            sx={{ fontFamily: "Vazir" }}
          >
            <MenuItem value={"fa"}>فارسی</MenuItem>
            <MenuItem value={"en"}>انگلیسی</MenuItem>
            <MenuItem value={"de"}>آلمانی</MenuItem>
            <MenuItem value={"hi"}>هندی</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Converter text={text} language={language} />
    </Box>
  );
};

export default Introduction;
