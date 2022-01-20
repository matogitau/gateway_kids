import clientPromise from "../../../lib/mongodb";
import handler from "../pages/api/auth/signUp";

export async function connectDb(collection) {
  try {
    const client = await clientPromise;
    const collection = await db.collection(collection);
  } catch (error) {
    res.status(500).json({ message: "cant connect to Db" });
  }

  return client;
}

export async function insertOneOnly(client, documents, collection) {
  /* client is connection handle
  document is an obj to be inserted,
    collection is db collection */
  try {
    const db = client.db();
    await db.collection(collection).insertOne(documents);
    res.status(201).json({ message: "inserted!" });
  } catch (error) {
    res.status(500).json({ message: "inserting failed" });
  }
}
