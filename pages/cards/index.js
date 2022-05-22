import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CardModal from "../../components/cardModal";
import { useState } from "react";

const index = () => {
  const [flag, setflag] = useState(false);

  const OpenModalHandler = () => {
    setflag(true);
  };

  return (
    <Container dir="rtl">
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <Card>
            <CardContent>
              <h2>:عنوان</h2>
              <p>آیا میخواهید این کارت را حذف کنید؟</p>

              <Button
                variant="outlined"
                color="error"
                endIcon={
                  <DeleteIcon
                    style={{ marginRight: "15px", fontSize: "20px" }}
                  />
                }
                onClick={OpenModalHandler}
              >
                بله
              </Button>
              <Button variant="outlined" color="success">
                خیر
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {flag && <CardModal flag={flag} setflag={setflag} />}
    </Container>
  );
};

export default index;
