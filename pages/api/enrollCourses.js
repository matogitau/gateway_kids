import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = { ...req.body.course }; /* data is in body.course obj */
    const client = await clientPromise;
    const db = client.db(); /* get db handle */
    const yourCollection = db.collection("courses"); /* get collection handle */
    const result = await yourCollection.insertOne(
      data
    ); /* insert one document */

    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
