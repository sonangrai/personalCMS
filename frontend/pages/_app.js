import "../styles/globals.scss";
import "../icons/fontawesome/css/all.min.css";
import Header from "../layouts/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
