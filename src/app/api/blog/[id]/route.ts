import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
  res: NextApiResponse
) {
  const id = params.id;

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  if (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json(data, { status: 200 });
}
