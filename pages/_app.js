import '../styles/globals.css'
import AOS from "aos";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
        disable: 'mobile',
        once: true,
    });
  }, []);

  return <Component {...pageProps} />
}



export default MyApp
