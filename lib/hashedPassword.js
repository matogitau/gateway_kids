import { hash, compare } from "bcryptjs";

export async function hashedPassword(password) {
  const hashedPassword = await hash(
    password,
    12
  ); /* 12 how strong password is  */
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
