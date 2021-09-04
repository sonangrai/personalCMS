import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Head>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
    </>
  );
};

export default Header;
