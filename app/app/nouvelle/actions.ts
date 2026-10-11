"use server";

import { redirect } from "next/navigation";
import { creerClientServeur } from "@/lib/supabase/serveur";

function ajouterJours(date: string, jours: number) {
  const d = new Date(date + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + jours);
  return d.toISOString().slice(0, 10);
}

export async function creerFacture(formData: FormData) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const clientNom = String(formData.get("client_nom") ?? "").trim();
  const clientEmail = String(formData.get("client_email") ?? "").trim();
  const numero = String(formData.get("numero") ?? "").trim();
  const montant = Number(
    String(formData.get("montant") ?? "").replace(",", ".")
  );
  const echeance = String(formData.get("echeance") ?? "");

  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail);
  const dateValide = /^\d{4}-\d{2}-\d{2}$/.test(echeance);
  const montantCentimes = Math.round(montant * 100);

  if (
    !clientNom ||
    clientNom.length > 120 ||
    !numero ||
    numero.length > 60 ||
    !emailValide ||
    !dateValide ||
    !Number.isFinite(montant) ||
    montantCentimes <= 0 ||
    montantCentimes > 100000000
  ) {
    redirect("/app/nouvelle?erreur=1");
  }

  const { data: facture, error } = await supabase
    .from("factures")
    .insert({
      user_id: user.id,
      client_nom: clientNom,
      client_email: clientEmail,
      numero,
      montant_centimes: montantCentimes,
      echeance,
    })
    .select("id")
    .single();

  if (error || !facture) {
    redirect("/app/nouvelle?erreur=1");
  }

  const { error: erreurRelances } = await supabase.from("relances").insert(
    [7, 15, 30].map((etape) => ({
      facture_id: facture.id,
      etape,
      prevue_le: ajouterJours(echeance, etape),
    }))
  );

  if (erreurRelances) {
    redirect("/app/nouvelle?erreur=1");
  }

  redirect("/app");
}
