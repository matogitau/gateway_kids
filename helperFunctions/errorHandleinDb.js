import clientPromise from "../lib/mongodb";

export async function connectDbandColl(dbCollection, res) {
  /* you can pass dbCollection or fail */
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = await db.collection(dbCollection);
    return collection;
  } catch (error) {
    res.status(500).json({ message: "cant connect to Db or collection" });
  }
}

export async function insertOneOnly(connectDbandColl, documents, res) {
  /* connectDbandColl is the collection handle
  document is an obj to be inserted,
     */
  try {
    await connectDbandColl.insertOne(documents);
    res.status(201).json({ message: "inserted!" });
  } catch (error) {
    res.status(500).json({ message: "inserting failed" });
  }
}
