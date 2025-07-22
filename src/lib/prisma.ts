import { PrismaClient } from "../generated/prisma/client"

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const prisma = globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {

  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  }

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }

  prisma = globalWithPrisma.prisma;
}

export default prisma;
