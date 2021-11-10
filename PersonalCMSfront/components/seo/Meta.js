import Head from "next/head";
import React, { useState, useEffect } from "react";

const Meta = ({ title, description, image, twitterType }) => {
  const [url, seturl] = useState();

  useEffect(() => {
    seturl(window.location.origin);
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/${image}`} />
        <meta property="twitter:card" content={twitterType} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="og:url" content={url} />
      </Head>
    </>
  );
};

export default Meta;
