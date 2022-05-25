import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import { useState } from "react";

const NavBar = () => {
  const [value, setValue] = useState();

  return (
    <>
      <AppBar sx={{ background: "light-blue" }}>
        <Toolbar>
          <Tabs
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab label="Home" />
            <Tab label="Cards" />
            <Tab label="Criptocurrency tracker" />
            <Tab label="#example" />
          </Tabs>
          <Box marginLeft={"auto"}>
            <LoginIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
