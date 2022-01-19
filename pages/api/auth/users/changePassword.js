import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json("you must be logged in first");
    return;
  }
}
