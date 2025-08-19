import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
  const res = await fetch(`${apiUrl}/health`, { cache: "no-store" });
  const json = await res.json();
  return NextResponse.json(json);
}
