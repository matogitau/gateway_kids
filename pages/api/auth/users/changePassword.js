import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({
    req: req,
  }); /* req key is set on serverside */
  if (!session) {
    res.status(401).json({ message: "you must be logged in first" });
    return;
  }

  const email = session.user.email;
  const data = { ...req.body.contents }; /* we are receiving contents as obj */
  const oldPassword = data.oldPassword;
  const newPassword = data.newPassword;
}
