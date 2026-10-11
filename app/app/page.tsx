import { creerClientServeur } from "@/lib/supabase/serveur";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Tes factures, Recouvre",
};

export default async function Tableau() {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <p className="font-titre text-xl font-bold">Recouvre</p>
      <p className="mt-1 text-sm text-gris">{user.email}</p>

      <div className="mt-8 grid grid-cols-3 border-y border-filet py-4">
        <div>
          <p className="text-xs text-gris">Dû</p>
          <p className="font-chiffre text-xl">0 €</p>
        </div>
        <div>
          <p className="text-xs text-gris">Relancé</p>
          <p className="font-chiffre text-xl">0 €</p>
        </div>
        <div>
          <p className="text-xs text-gris">Encaissé</p>
          <p className="font-chiffre text-xl">0 €</p>
        </div>
      </div>

      <div className="mt-8 border border-filet px-5 py-6">
        <h1 className="font-titre text-2xl font-bold leading-tight">
          Aucune facture pour l'instant.
        </h1>
        <p className="mt-3 leading-relaxed text-gris">
          Ajoute ta première facture impayée : son montant et son échéance
          suffisent. Recouvre prépare les relances à 7, 15 et 30 jours.
        </p>
        <span className="mt-5 block rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier opacity-60">
          Ajouter une facture (bientôt)
        </span>
      </div>
    </main>
  );
}
