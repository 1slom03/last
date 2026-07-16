import { NextResponse } from "next/server";
import { courses } from "@/lib/courses-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return NextResponse.json({ error: "Kurs topilmadi" }, { status: 404 });
  }

  return NextResponse.json(course);
}