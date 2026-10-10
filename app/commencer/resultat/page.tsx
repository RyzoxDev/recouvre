const MONTANTS = [500, 3000, 10000, 20000];
const ANCIENNETE = [
  "moins d'un mois",
  "entre un et trois mois",
  "plus de trois mois",
];
const FREINS = [
  "tu trouves ça gênant et tu repousses",
  "tu n'as pas le temps",
  "tu ne sais pas quoi écrire",
];

function lire(valeur: string | undefined, max: number) {
  const n = Number(valeur);
  return Number.isInteger(n) && n >= 0 && n < max ? n : 0;
}

function euros(n: number) {
  return n.toLocaleString("fr-FR") + " €";
}

export const metadata = {
  title: "Ton résultat, Recouvre",
};

export default async function Resultat({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; b?: string; c?: string }>;
}) {
  const params = await searchParams;
  const a = lire(params.a, MONTANTS.length);
  const b = lire(params.b, ANCIENNETE.length);
  const c = lire(params.c, FREINS.length);

  const du = MONTANTS[a];

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <p className="mt-10 text-sm text-gris">Voilà ce que tu nous as dit</p>
      <h1 className="mt-2 font-titre text-3xl font-bold leading-tight">
        Aujourd'hui, environ {euros(du)} dorment chez tes clients.
      </h1>

      <p className="mt-5 text-lg leading-relaxed">
        Ton plus ancien impayé date de {ANCIENNETE[b]}, et {FREINS[c]}.
        Chaque semaine sans relance rend la facture plus difficile à réclamer.
      </p>

      <div className="mt-8 border-y border-filet py-4">
        <p className="text-sm text-gris">Ce que ça te coûte</p>
        <p className="mt-1 font-chiffre text-2xl text-brique">
          {euros(du)} de trésorerie bloqués
        </p>
        <p className="mt-2 text-sm text-gris">
          Estimation d'après tes réponses (montant médian de ta tranche).
        </p>
      </div>

      <h2 className="mt-8 font-semibold">Ce que Recouvre changerait</h2>
      <p className="mt-2 leading-relaxed">
        Une relance polie part à 7, 15 et 30 jours après l'échéance, sans que
        tu aies à l'écrire ni à l'envoyer. Si rien ne bouge, la mise en demeure
        est déjà rédigée.
      </p>

      <a
        href="/commencer/apercu"
        className="mt-10 block rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier"
      >
        Voir ta première relance
      </a>
      <p className="mt-3 text-center text-sm text-gris">
        Gratuit, sans inscription.
      </p>
    </main>
  );
}
