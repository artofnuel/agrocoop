import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const fishery = await prisma.fishery.findMany();
    return new Response(JSON.stringify(fishery), { status: 200 });
  } catch (error) {
    console.error("Error fetching farmers:", error);
    return new Response("Error fetching farmers", { status: 500 });
  }
}
