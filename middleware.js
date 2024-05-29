import NextAuth from "next-auth";
import { authConfig } from "./authconfig";

export default NextAuth(authConfig);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }
