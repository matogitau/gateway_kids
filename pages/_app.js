import "../styles/globals.css";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import { Router } from "next/router";

/* component opens all pages automatically*/
/* we can use useRouter hook and limit where to show header and footer 
where Router().pathname !== /pages use regex to show all possible pages */

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
