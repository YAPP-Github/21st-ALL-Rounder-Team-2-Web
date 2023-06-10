import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

export const isJwtExpired = (token: string) => {
  const decoded = jwt.decode(token) as JwtPayload;
  return decoded.exp && decoded.exp * 1000 <= Date.now();
};
