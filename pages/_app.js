import "../styles/globals.css";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
/* component opens all pages automatically*/
function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
