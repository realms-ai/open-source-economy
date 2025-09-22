// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // avoid any caching of POST

export async function POST(req: NextRequest) {
  // Ensure JSON body parsing doesn't 500 on bad payloads
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad JSON body." }, { status: 400 });
  }

  const email = (body?.email ?? "").toString().trim().toLowerCase();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!ok) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  // TODO: push to your ESP/DB
  // await addToList(email);

  return NextResponse.json({ ok: true });
}

// If you need cross-origin usage, also export OPTIONS:
// export function OPTIONS() { return NextResponse.json({}, { status: 204 }); }
