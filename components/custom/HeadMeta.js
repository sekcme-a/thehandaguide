import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "더한다 - 우리가족 행복비서"}</title>
      <meta
        name="description"
        content={
          description ||
          "우리가족 행복비서 더한다. 프로그램 확인, 신청, 문의, 관리까지 한번에!"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "더한다"} />
      <meta
        property="og:description"
        content={
          description ||
          "우리가족 행복비서 더한다. 프로그램 확인, 신청, 문의, 관리까지 한번에!"
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://thehanda.net"} />
      <meta
        property="og:image"
        content={image || "https://thehanda.net/favicon.ico"}
      />
      <meta name="keywords" content="더한다,우리가족,행복비서,thehanda" />
      <meta property="og:article:author" content="더한다" />
    </Head>
  );
};

export default HeadMeta;
