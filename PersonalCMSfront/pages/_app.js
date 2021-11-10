import "../styles/globals.scss";
import "../icons/fontawesome/css/all.min.css";
import Header from "../layouts/header/Header";
import { useRouter } from "next/router";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      {router.route !== "/login" && <Header />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
