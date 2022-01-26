import clientPromise from "../lib/mongodb";

export async function connectDbandColl(dbCollection, res) {
  /* you can pass dbCollection or fail 
  it is the collection*/
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = await db.collection(dbCollection);
    return collection;
  } catch (error) {
    res.status(500).json({ message: "cant connect to Db or collection" });
    return;
  }
}

export async function insertOneOnly(connectDbandColl, documents, res) {
  /* connectDbandColl is the collection handle
  document is an obj to be inserted,
     */
  try {
    const results = await connectDbandColl.insertOne(documents);
    return results;
  } catch (error) {
    res.status(500).json({ message: "inserting failed" });
    return;
  }
}

export async function findOneOnly(connectDbandColl, searchObj, res) {
  /* connectDbandColl is the collection handle
  document is an obj to be used to find,
     */
  try {
    const results = await connectDbandColl.findOne(searchObj);
    return results;
  } catch (error) {
    res.status(500).json({ message: "searching failed" });
    return;
  }
}

export async function updateOneOnly(
  connectDbandColl,
  identifierObj,
  changingObj,
  res
) {
  /* connectDbandColl is the collection handle
  document is an obj to be used to find,
     */
  try {
    console.log("identifier", identifierObj);
    console.log("changing", changingObj);
    const results = await connectDbandColl.updateOne(identifierObj, {
      $set: changingObj,
    });

    return results;
  } catch (error) {
    res.status(500).json({ message: "update failed" });
    return;
  }
}
