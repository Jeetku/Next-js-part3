import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json(
    { name: "Jeetesh", age: 28, city: "Noida" },
    { status: 400 }
  );
}
