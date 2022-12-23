import { PrismaClient, type Content } from "@prisma/client";

const prisma = new PrismaClient();

export const create = (data: Content) => {
  return prisma.content.create({
    data: {
      ...data,
    },
  });
};
