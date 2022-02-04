import React from "react";
import { useRouter } from "next/router";

const PlansDetails = () => {
  const router = useRouter();
  const params = router.query.plansDetails || [];
  console.log(router);

  return (
    <div>
      <p>Here we give plans details as {params}</p>
    </div>
  );
};

export default PlansDetails;
