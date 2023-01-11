import { PrismaClient, User } from "@prisma/client";
import { CreateUserInterface } from "../validations/auth";

const prisma = new PrismaClient();

export const create = (data: CreateUserInterface) => {
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
