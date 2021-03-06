// TranslatorIntroduction components only works on localhost://3000 and VPN must be on

import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PhotoCarousel from "../components/PhotoCarousel";
import TranslatorIntroduction from "../components/Translator/TranslatorIntroduction";
import MainPageIntroduction from "../components/MainPageIntro/MainPageIntro";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Container>
        <h1>Omid Abdi</h1>
        <PhotoCarousel />

        {/* <TranslatorIntroduction /> */}

        <MainPageIntroduction />
        {/* <Footer /> */}
      </Container>
    </div>
  );
}
