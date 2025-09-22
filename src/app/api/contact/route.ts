import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type ContactBody = {
  name: string;
  email: string;
  message: string;
  linkedin?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const xri = req.headers.get("x-real-ip");
  if (xri) return xri.trim();
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  return "anonymous";
}

export async function POST(req: NextRequest) {
  // Parse JSON safely to the expected shape
  let body: Partial<ContactBody> = {};
  try {
    body = (await req.json()) as Partial<ContactBody>;
  } catch {
    return NextResponse.json({ error: "Bad JSON body." }, { status: 400 });
  }

  const ip = getClientIp(req);

  // Extract + normalize
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const message = (body.message ?? "").trim();
  const linkedin = (body.linkedin ?? "").trim();



  // Validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const payload = {
    name: name.slice(0, 200),
    email: email.slice(0, 200),
    linkedin: linkedin.slice(0, 300),
    message: message.slice(0, 5000),
    at: new Date().toISOString(),
    from: ip,
  };

  try {
    const saved = await prisma.contactMessage.create({
      data: {
        name: payload.name,
        email: payload.email,
        linkedin: payload.linkedin || null,
        message: payload.message,
        ip: payload.from,
        createdAt: new Date(payload.at),
      },
      select: { id: true },
    });

    // Server log
    console.log("[contact] submission", payload);

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
