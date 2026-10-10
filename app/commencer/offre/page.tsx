export const metadata = {
  title: "Débloquer Recouvre, 29 €/mois",
};

const QUESTIONS = [
  {
    q: "Est-ce que ça marche pour mon cas ?",
    r: "Recouvre est fait pour les indépendants et petites structures qui facturent des professionnels. Il relance poliment, il ne remplace pas un avocat : si un client conteste la facture, il faudra en discuter avec lui.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Quelques minutes par facture : tu saisis le montant et l'échéance, Recouvre s'occupe des relances à 7, 15 et 30 jours.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu résilies quand tu veux, sans engagement. L'abonnement s'arrête à la fin de la période payée. Pendant 30 jours après ton premier paiement, tu peux aussi être remboursé.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À accéder au service : relances écrites automatiques, lettre de mise en demeure et tableau de suivi, avec des factures illimitées. Recouvre est en accès anticipé : certaines fonctions sont encore en construction et ton accès t'est envoyé par e-mail.",
  },
];

export default function Offre() {
  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <h1 className="mt-10 font-titre text-3xl font-bold leading-tight">
        Ta première relance est prête. Garde la suite.
      </h1>
      <p className="mt-4 leading-relaxed">
        Tu as déjà ton premier modèle. Pour 29 € par mois, Recouvre envoie les
        relances à ta place et prépare la mise en demeure.
      </p>

      <div className="mt-8 border-y border-filet py-4">
        <p className="text-sm text-gris">Ce que ça peut te rapporter</p>
        <p className="mt-1 font-chiffre text-2xl text-brique">
          Une seule facture récupérée rembourse des mois d'abonnement.
        </p>
        <p className="mt-2 text-sm text-gris">
          Pour mémoire, tu as chiffré tes impayés à l'écran précédent. 29 €,
          c'est moins qu'un pour cent d'une facture de 3 000 €.
        </p>
      </div>

      <div className="mt-8 border border-encre px-5 py-5">
        <p className="text-sm text-gris">Formule unique</p>
        <p className="mt-1 font-chiffre text-3xl">29 € / mois</p>
        <p className="mt-1 text-sm text-gris">
          Soit moins de 1 € par jour. Factures illimitées.
        </p>
      </div>

      <div className="mt-4 border border-filet px-5 py-4">
        <p className="font-semibold">Satisfait ou remboursé, 30 jours</p>
        <p className="mt-1 text-sm leading-relaxed text-gris">
          Écris-nous dans les 30 jours après ton premier paiement : tu es
          remboursé intégralement, sans justificatif, sous 5 jours ouvrés.
        </p>
      </div>

      <a
        href="/api/checkout"
        className="mt-6 block rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier"
      >
        Débloquer pour 29 €/mois
      </a>
      <p className="mt-3 text-center text-sm text-gris">
        Sans engagement, résiliable à tout moment.
      </p>

      <h2 className="mt-12 font-titre text-2xl font-bold">
        Questions fréquentes
      </h2>
      <div className="mt-4 space-y-5">
        {QUESTIONS.map((item) => (
          <div key={item.q}>
            <p className="font-semibold">{item.q}</p>
            <p className="mt-1 leading-relaxed text-gris">{item.r}</p>
          </div>
        ))}
      </div>

      <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-filet pt-6 text-sm text-gris">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </main>
  );
}
