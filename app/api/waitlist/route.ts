import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          source,
        },
      ])
      .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}