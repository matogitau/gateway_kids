import { MongoClient } from "mongodb";

const DbConnect = async () => {
  await MongoClient.connect(
    `mongodb+srv://mkg:12345@cluster0.9kc5p.mongodb.net/gatewayKids?retryWrites=true&w=majority`,
    function (err, client) {
      if (err) {
        console.log(
          "Error occurred while connecting to MongoDB Atlas...\n",
          err
        );
      }

      const conn = client.db();
      // perform actions on the collection object
      return conn;
    }
  );
  return conn;
};

export default DbConnect;
