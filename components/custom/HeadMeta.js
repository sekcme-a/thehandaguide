import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "더한다 - 우리가족 행복비서"}</title>
      <meta
        name="description"
        content={
          description ||
          "우리가족 행복비서 더한다. 더한다를 통해 관심있는 기관과 소통하세요! 프로그램 확인, 신청, 문의, 관리까지 한번에!"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "더한다"} />
      <meta property="og:description"
        content={
        description ||
        "우리가족 행복비서 더한다. 더한다를 통해 관심있는 기관과 소통하세요! 프로그램 확인, 신청, 문의, 관리까지 한번에!"
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://thehandaguide.netlify.app"} />
      <meta property="og:image" content={"https://thehandaguide.netlify.app/favicon.ico" } />
      <meta name="keywords" content="더한다"/>
      <meta property="og:article:author" content="더한다" />
    </Head>
  );
};

export default HeadMeta;