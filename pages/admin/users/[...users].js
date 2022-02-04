/* will catch all routes like admin/users/2021, admin/users/2022/01 
i.e anything after users*/
import { useRouter } from "next/router";
import React from "react";

const allUsers = () => {
  const route = useRouter();
  const params = route.query.users || [];

  return <div>{params.join("/")}</div>;
};

export default allUsers;
