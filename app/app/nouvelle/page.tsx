import { redirect } from "next/navigation";
import { creerClientServeur } from "@/lib/supabase/serveur";
import { creerFacture } from "./actions";

export const metadata = {
  title: "Nouvelle facture, Recouvre",
};

const champ =
  "mt-2 block w-full rounded-sm border border-encre bg-white px-4 py-4 text-lg";

export default async function Nouvelle({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string }>;
}) {
  const supabase = await creerClientServeur();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const params = await searchParams;

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <a href="/app" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <h1 className="mt-10 font-titre text-3xl font-bold leading-tight">
        Ajouter une facture impayée
      </h1>
      <p className="mt-3 leading-relaxed text-gris">
        Recouvre prépare les relances à 7, 15 et 30 jours après l'échéance.
      </p>

      {params.erreur && (
        <p className="mt-6 border border-brique px-4 py-3 text-sm text-brique">
          La facture n'a pas pu être enregistrée. Vérifie les champs et
          réessaie.
        </p>
      )}

      <form action={creerFacture} className="mt-8 space-y-6">
        <div>
          <label htmlFor="client_nom" className="text-sm text-gris">
            Nom du client
          </label>
          <input
            id="client_nom"
            name="client_nom"
            type="text"
            required
            maxLength={120}
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="client_email" className="text-sm text-gris">
            E-mail du client
          </label>
          <input
            id="client_email"
            name="client_email"
            type="email"
            required
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="numero" className="text-sm text-gris">
            Numéro de facture
          </label>
          <input
            id="numero"
            name="numero"
            type="text"
            required
            maxLength={60}
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="montant" className="text-sm text-gris">
            Montant dû, en euros
          </label>
          <input
            id="montant"
            name="montant"
            type="text"
            inputMode="decimal"
            required
            placeholder="1 200"
            className={champ}
          />
        </div>

        <div>
          <label htmlFor="echeance" className="text-sm text-gris">
            Date d'échéance
          </label>
          <input
            id="echeance"
            name="echeance"
            type="date"
            required
            className={champ}
          />
        </div>

        <button
          type="submit"
          className="block w-full rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier"
        >
          Enregistrer la facture
        </button>
      </form>

      <a
        href="/app"
        className="mt-6 block text-center text-sm text-gris underline"
      >
        Annuler
      </a>
    </main>
  );
}
