import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PhotoCarousel from "../components/PhotoCarousel";

export default function Home() {
  return (
    <div>
      <Container>
        <h1>Omid Abdi</h1>
        <PhotoCarousel />
      </Container>
    </div>
  );
}
