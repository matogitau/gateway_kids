/* will expose routes for user login and user logout */
import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/hashedPassword";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
  } /* check other providers you may add database etc */,
  providers: [
    CredentialsProviders({
      /* authorize will be called when it receives incoming login req */
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db();
        /* check if we have user or email */
        const usersCollection = await db.collection("users");

        const user = await usersCollection.findOne({
          $or: [
            { email: credentials.email },
            { userName: credentials.userName },
          ],
        });

        if (!user) {
          throw new Error("No user found");
        }
        const isvalid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isvalid) {
          throw new Error("password is invalid");
        }

        return {
          email: user.email,
        }; /* only return email and username */
        /* client.close() */
      },
    }),
  ],
});
