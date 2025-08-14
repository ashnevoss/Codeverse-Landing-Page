import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Send data to Google Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwgHo421g-LHPtr92F23Vffw_5mb98qUSIZF2zOdYSatd6NJcWYgd9luJJPT6jtICRH/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { result: "error", error: "Failed to submit to Google Sheets" },
        { status: 500 }
      );
    }

    return NextResponse.json({ result: "success" });
  } catch (err: any) {
    return NextResponse.json(
      { result: "error", error: err.message },
      { status: 500 }
    );
  }
}
