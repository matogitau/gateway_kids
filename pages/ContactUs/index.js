import React from "react";

import { useParams } from "react-router-dom";

const ContactUs = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Head>
        <title>Gateway Kids Contact us</title>
        <meta
          name="description"
          content="We are open to discuss your childs Future together. Contact us"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <p>Here we talk about us and receive Comments</p>
      </div>
    </>
  );
};

export default ContactUs;
