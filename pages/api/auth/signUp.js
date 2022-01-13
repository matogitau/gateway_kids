import clientPromise from "../../../lib/mongodb";
import hashedPassword from "../../../lib/hashedPassword";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const { userName, email, age, password } = data;
    /* if (!email || !email.includes("@)"){
      res.status(422).json({message:"invalid email"})
      return
    } */
    if (!password || password.trim().length > 8) {
      res
        .status(422)
        .json({ message: "invalid password, should be at least 8 characters" });
      return;
    }
    const encryptedPassword = hashedPassword(password);
    const client = await clientPromise;
    const db = client.db();
    const results = await db.collections("users").insertOne({
      userName: userName,
      email: email,
      age: age,
      password: encryptedPassword,
    });

    res.status(201).json({ message: "user created successfuly" });
  }
};

export default handler;
