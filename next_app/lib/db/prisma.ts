// lib/prisma.ts
import { PrismaClient } from "../../prisma/dev/generated/db";

let prisma: PrismaClient;
prisma = new PrismaClient();

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

export default prisma;
