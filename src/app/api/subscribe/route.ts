import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic"; // avoid any caching of POST
export const runtime = "nodejs";
type SubscribeBody = { email: string; };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(req: NextRequest) {
  let body: Partial<SubscribeBody> = {};
  try {
    body = (await req.json()) as Partial<SubscribeBody>;
  } catch {
    return NextResponse.json({ error: "Bad JSON body." }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  try {
    const sub = await prisma.subscription.upsert({
      where: { email },
      update: {},
      create: { email, status: "subscribed" },
      select: { id: true }
    });

    return NextResponse.json({ ok: true, id: String(sub.id) });
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      const again = await prisma.subscription.findUnique({
        where: { email },
        select: { id: true },
      });
      return NextResponse.json({ ok: true, id: again?.id, existed: true });
    }

    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Server Unavailable" }, { status: 500 });
  }
}
