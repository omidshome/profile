import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React, { useState } from "react";
import { useRouter } from "next/router";

const NavDrawer = () => {
  const router = useRouter();
  const [openHambergerDrawer, setOpenHambergerDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openHambergerDrawer}
        onClose={() => setOpenHambergerDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText onClick={() => router.push("/")}>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText onClick={() => router.push("/cards")}>
                cards
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText onClick={() => router.push("/cryptot")}>
                Cryptocurrency Tracker
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText onClick={() => router.push("/photo")}>
                Photo Gallary
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpenHambergerDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
