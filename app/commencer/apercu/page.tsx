export const metadata = {
  title: "Ta première relance, Recouvre",
};

const RELANCE = `Objet : Facture [N° de facture] : rappel d'échéance

Bonjour [Prénom],

Sauf erreur de ma part, la facture [N° de facture] d'un montant de [montant] €, échue le [date d'échéance], n'a pas encore été réglée.

Il s'agit probablement d'un oubli. Pourriez-vous m'indiquer la date de paiement prévue ?

Je vous joins la facture pour faciliter la démarche.

Bien cordialement,
[Ton prénom et nom]`;

export default function Apercu() {
  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <p className="mt-10 text-sm text-gris">Relance n° 1, à 7 jours</p>
      <h1 className="mt-2 font-titre text-3xl font-bold leading-tight">
        Voilà ta première relance, prête.
      </h1>

      <p className="mt-4 leading-relaxed">
        Copie-la, remplace les crochets, envoie-la. Elle est à toi, même si tu
        n'achètes rien.
      </p>

      <pre className="mt-6 whitespace-pre-wrap border border-filet bg-white px-4 py-4 font-texte text-base leading-relaxed">
        {RELANCE}
      </pre>

      <h2 className="mt-10 font-semibold">La suite, verrouillée</h2>
      <ul className="mt-3 space-y-3">
        <li className="border border-filet px-4 py-3 text-gris">
          Relance n° 2, à 15 jours : ton plus ferme
        </li>
        <li className="border border-filet px-4 py-3 text-gris">
          Relance n° 3, à 30 jours : dernier avis avant mise en demeure
        </li>
        <li className="border border-filet px-4 py-3 text-gris">
          Lettre de mise en demeure, prête à envoyer
        </li>
      </ul>

      <a
        href="/commencer/offre"
        className="mt-10 block rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier"
      >
        Débloquer la suite
      </a>
    </main>
  );
}
