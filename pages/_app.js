import "../styles/globals.css";
import "../styles/PhotoCarousel.css";
import NavBar from "../components/Navigation/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
