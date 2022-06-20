import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import bg from "./Background.module.css";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <div>
      <Box
        mt={"2.5rem"}
        pb={"1.5rem"}
        className={bg.theme}
        sx={{
          width: "100%",
          height: "20%",
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          justifyContent={"center"}
          //   columnSpacing={{ xs: 4, sm: 4, md: 2 }}
          rowSpacing={{ xs: 6, sm: 4, md: 2 }}
        >
          <Grid item>
            <MarkEmailReadIcon fontSize="large" /> Omidshome@gmail.com
          </Grid>
          <Grid item>
            <MobileFriendlyIcon fontSize="large" /> 09372282348
          </Grid>
          <Grid item>
            <WhatsAppIcon fontSize="large" /> 09372282348
          </Grid>
          <Grid item>
            <TelegramIcon fontSize="large" /> @omidabdi87
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
