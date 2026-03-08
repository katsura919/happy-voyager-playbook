import { NextResponse } from "next/server";

// TODO: re-enable when Stripe/Supabase/Resend keys are configured
export async function POST() {
  return NextResponse.json({ error: "Not configured" }, { status: 503 });
}
