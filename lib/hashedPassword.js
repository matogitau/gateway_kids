import { hash } from "bcryptjs";

export default async function hashPasword(password) {
  const hashedPassword = await hash(
    password,
    12
  ); /* 12 how strong passwrod is  */
  return hashedPassword;
}
