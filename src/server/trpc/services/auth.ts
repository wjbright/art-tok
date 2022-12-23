import { PrismaClient, type User } from "@prisma/client";

const prisma = new PrismaClient();

export const create = (data: User) => {
  return prisma.user.create({
    data: {
      ...data,
    },
  });
};

export const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};
