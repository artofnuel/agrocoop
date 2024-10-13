import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure this path is correct

export async function GET() {
  try {
    const farmers = await prisma.palmTrees.findMany();
    return NextResponse.json(farmers);
  } catch (error) {
    console.error("Error fetching farmers:", error);
    return NextResponse.json({ error: "Failed to fetch farmers" }, { status: 500 });
  }
}
