import { PrismaClient } from "@prisma/client";
import { type Content as ContentInterface } from "../interfaces/content";

const prisma = new PrismaClient();

export const create = (data: ContentInterface) => {
  return prisma.content.create({
    data: {
      ...data,
    },
  });
};
