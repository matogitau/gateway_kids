import "../styles/globals.css";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { SessionProvider } from "next-auth/react";
/* component opens all pages automatically*/

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div className="App">
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </div>
  );
}
