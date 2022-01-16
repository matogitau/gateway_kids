import "../styles/globals.css";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { SessionProvider } from "next-auth/react";
/* component opens all pages automatically*/
function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <SessionProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
