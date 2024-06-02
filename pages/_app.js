// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css"; 
import Head from "next/head";

const metadata = {
  title: "ProRecipes",
  description:
    "A web application that enables users to search for recipes based on the name of the dish and the protein content specified in grams.",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
