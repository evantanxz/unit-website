import Head from "@docusaurus/Head";
import React from "react";

function SEO({ title, description }) {
  return (
    <Head>
      <title>Unit Network | {title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </Head>
  );
}

export default SEO;
