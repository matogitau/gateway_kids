import clientPromise from "../../../lib/mongodb";
import hashedPassword from "../../../lib/hashedPassword";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = { ...req.body.contents }; /* data is in userInputs   */
    console.log(data);
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
    const encryptedPassword = hashedPassword(password);
    const client = await clientPromise;
    const db = client.db();

    const collection = await db.collection("users");

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
