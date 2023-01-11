import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../server/db/client";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      const { name, email, image } = user;
      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            email: email as string,
          },
        });
        if (!existingUser) {
          await prisma.user.create({
            data: {
              profile_image: image as string,
              email: email as string,
              name: name as string,
            },
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
