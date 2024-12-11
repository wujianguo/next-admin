import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://apphub.test0.highso.com.cn/api/apps";
  const response = await fetch(url);
  const apps = await response.json();
  return NextResponse.json(apps);
}
