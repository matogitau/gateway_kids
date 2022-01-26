import { getSession } from "next-auth/react";

import {
  connectDbandColl,
  findOneOnly,
  updateOneOnly,
} from "../../../../helperFunctions/errorHandleinDb";
import { verifyPassword, hashedPassword } from "../../../../lib/hashedPassword";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({
    req: req,
  }); /* req key is available  on serverside */
  // protect api route with this code
  if (!session) {
    res.status(401).json({ message: "you must be logged in first" });
    return;
  }

  const email = session.user.email;
  const data = { ...req.body.contents }; /* we are receiving contents as obj */

  const oldPassword = data.oldPassword;
  const newPassword = data.newPassword;
  const collection = await connectDbandColl("users", res);
  const user = await findOneOnly(collection, { email: email }, res);

  if (!user) {
    res.status(404).json({ message: "user not found" });
    return;
  }

  const dbPassword = user.password;
  const passwordVerified = await verifyPassword(oldPassword, dbPassword);

  if (!passwordVerified) {
    res.status(422).json({ message: "details of password not tallying" });
    // client.close()
    return;
  }

  const newHashedPassword = await hashedPassword(newPassword);

  const result = await updateOneOnly(
    collection,
    { email: email },
    { password: newHashedPassword },
    res
  );
  res.status(201).json({ message: "updated!" });
  // close client connection
}
