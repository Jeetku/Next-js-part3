import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  //   console.log(content.params.id);
  const data = user;
  //   console.log(data, content.params.id);
  const userData = data.filter((item) => item.id == content.params.id);
  console.log(userData);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No user data found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}
