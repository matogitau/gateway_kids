import clientPromise from "../../../lib/mongodb";
import { hashedPassword } from "../../../lib/hashedPassword";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = { ...req.body.contents }; /* data is in userInputs   */

    const { userName, email, age, password } = data;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "invalid email" });
      return;
    }
    if (!password || password.trim().length < 8) {
      res
        .status(422)
        .json({ message: "invalid password, should be at least 8 characters" });
      return;
    }

    const client = await clientPromise;
    const db = client.db();

    const collection = await db.collection("users");
    const checkUser = await collection.findOne({
      $or: [{ email: email }, { userName: userName }],
    }); /* $or operator checks if either of the condition is met */
    if (checkUser) {
      res.status(422).json({ message: "user already Exists" });
      /* client.close(); */
      return;
    }

    const encryptedPassword = await hashedPassword(password);
    const results = collection.insertOne({
      userName: userName,
      email: email,
      age: age,
      password: encryptedPassword,
    });

    res.status(201).json({ message: "user created successfuly" });
  }
};

export default handler;
