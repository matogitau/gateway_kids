import { hashedPassword } from "../../../lib/hashedPassword";
import {
  connectDbandColl,
  insertOneOnly
} from "../../../helperFunctions/errorHandleinDb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = { ...req.body.contents }; /* data is in contents   */

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

    const collection = await connectDbandColl("users", res);

    const checkUser = await collection.findOne({
      $or: [{ email: email }, { userName: userName }]
    }); /* $or operator checks if either of the condition is met */
    if (checkUser) {
      res.status(422).json({ message: "user already Exists" });
      /* client.close(); */
      return;
    }

    const encryptedPassword = await hashedPassword(password);
    /*  const results = collection.insertOne({
      userName: userName,
      email: email,
      age: age,
      password: encryptedPassword,
    }); 

    res.status(201).json({ message: "user created successfuly" }); */
    insertOneOnly(
      collection,
      {
        userName: userName,
        email: email,
        age: age,
        password: encryptedPassword
      },
      res
    );
  }
};

export default handler;
