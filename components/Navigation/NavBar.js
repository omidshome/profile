import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";

import { useState } from "react";
import DrawerHamberger from "./DrawerHamberger";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  console.log(isMatch);

  return (
    <>
      <AppBar sx={{ background: "light-blue" }}>
        <Toolbar>
          {isMatch ? (
            <DrawerHamberger />
          ) : (
            <>
              <Tabs
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" onClick={() => router.push("/")} />
                <Tab label="Cards" onClick={() => router.push("/cards")} />
                <Tab
                  label="Cryptocurrency tracker"
                  onClick={() => router.push("/cryptot")}
                />
                <Tab
                  label="Photo Gallary"
                  onClick={() => router.push("/photo")}
                />
              </Tabs>
              <Box marginLeft={"auto"}>
                <LoginIcon />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
