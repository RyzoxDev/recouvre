import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!secretKey || !priceId) {
    return NextResponse.redirect(new URL("/paiement-erreur", request.url), 303);
  }

  const stripe = new Stripe(secretKey);
  const origin = new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/merci`,
      cancel_url: `${origin}/`,
      locale: "fr",
    });

    if (!session.url) {
      return NextResponse.redirect(new URL("/paiement-erreur", request.url), 303);
    }
    return NextResponse.redirect(session.url, 303);
  } catch {
    return NextResponse.redirect(new URL("/paiement-erreur", request.url), 303);
  }
}
