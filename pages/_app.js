import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "../assets/css/plugins/font-awesome.css";
import "../assets/css/plugins/icomoon.css";
import "../assets/css/plugins/plugins.css";
import "../assets/scss/style.scss";
import "../style/custom.css";
import Footer from "components/layouts/Footer";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const pathname = usePathname();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");

    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {!pathname?.includes("email-verified") &&
        !pathname?.includes("privacypolicy") &&
        !pathname?.includes("group") &&
        !pathname?.includes("app-use") && <Footer footerSetting={{}} />}
    </>
  );
}

export default MyApp;
