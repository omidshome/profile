import "../styles/globals.css";
// import "../styles/background.css";
import "../styles/PhotoCarousel.css";
import NavBar from "../components/Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
