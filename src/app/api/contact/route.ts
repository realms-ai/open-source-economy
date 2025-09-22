import { NextResponse } from "next/server";

const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 5;
const hits = new Map<string, { count: number; start: number; }>();

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      (req as any).ip ||
      "anonymous";

    // Rate limit
    const now = Date.now();
    const rec = hits.get(ip);
    if (!rec || now - rec.start > WINDOW_MS) {
      hits.set(ip, { count: 1, start: now });
    } else {
      rec.count += 1;
      if (rec.count > MAX_HITS) {
        return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
      }
    }

    const { name, email, linkedin, message, honeypot } = await req.json();

    // Honeypot (bots)
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // Minimal payload
    const payload = {
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      linkedin: String(linkedin || "").slice(0, 300),
      message: String(message).slice(0, 5000),
      at: new Date().toISOString(),
      from: ip,
    };


    // Server log 
    console.log("[contact] submission", payload);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
