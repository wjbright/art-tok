import { PrismaClient, User } from "@prisma/client";
import { User as UserInterface } from "../interfaces/auth";

const prisma = new PrismaClient();

export const create = (data: UserInterface) => {
  return prisma.user.create({
    data: {
      ...data,
    },
  });
};

export const getUserByEmail = (data: UserInterface) => {
  return prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
};
