import prisma from "@/lib/prisma"; // Ensure this path is correct

export async function GET(req: Request) {
  try {
    const palmtree = await prisma.palmTrees.findMany();
    return new Response(JSON.stringify(palmtree), { status: 200 });
  } catch (error) {
    console.error("Error fetching farmers:", error);
    return new Response("Error fetching farmers", { status: 500 });
  }
}
