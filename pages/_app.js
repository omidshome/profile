import "../styles/globals.css";
import "../styles/PhotoCarousel.css";
import NavBar from "../components/Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
