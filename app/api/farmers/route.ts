import prisma from "@/lib/prisma"; // Ensure this path is correct

export async function GET(req: Request) {
  try {
    const farmers = await prisma.user.findMany();
    return new Response(JSON.stringify(farmers), { status: 200 });
  } catch (error) {
    return new Response("Error fetching farmers", { status: 500 });
  }
}
