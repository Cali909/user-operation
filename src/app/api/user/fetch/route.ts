import { UserDataType } from "@/types/auth/Login";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await fetch(`${process.env.API_BASE_URL}users`, {
    cache: "no-store",
  });

  const data = await response.json();

  return NextResponse.json(data, {
    status: 200,
  });
}
