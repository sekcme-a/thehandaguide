import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../assets/css/plugins/font-awesome.css';
import '../assets/css/plugins/icomoon.css';
import '../assets/css/plugins/plugins.css';
import '../assets/scss/style.scss';
import 'style/custom.css'
import Footer from 'components/layouts/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');

    AOS.init({
      once: true,
    });
  }, []);

  return(
    <>
      <Component {...pageProps} />
      <Footer footerSetting={{}} />
    </>
  )
}

export default MyApp;
