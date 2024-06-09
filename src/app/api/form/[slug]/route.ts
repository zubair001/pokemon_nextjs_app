// src/app/api/forms/route.ts

import { NextResponse } from "next/server";
import { getFormDetails } from "@/lib";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    if (!params.slug) throw new Error("Slug parameter is not found");

    const result = await getFormDetails(params.slug);
    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
