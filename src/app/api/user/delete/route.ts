import { UserDataType } from "@/types/auth/Login";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const postData: UserDataType = await req.json();

  if (!postData) {
    return new NextResponse(
      JSON.stringify({ name: "Please provide something to search for" }),
      { status: 400 }
    );
  }

  const response = await fetch(
    `${process.env.API_BASE_URL}users/${postData.id}`,
    {
      method: "DELETE",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const data = await response.json();

  return NextResponse.json(data, {
    status: 200,
  });
}
