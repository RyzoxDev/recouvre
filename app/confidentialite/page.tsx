export const metadata = {
  title: "Politique de confidentialité, Recouvre",
};

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <h1 className="mt-10 font-titre text-3xl font-bold leading-tight">
        Politique de confidentialité
      </h1>

      <h2 className="mt-8 font-semibold">Responsable du traitement</h2>
      <p className="mt-2 leading-relaxed">
        [À COMPLÉTER : prénom et nom], entrepreneur individuel, [À COMPLÉTER :
        adresse]. Contact : [À COMPLÉTER : e-mail de contact].
      </p>

      <h2 className="mt-8 font-semibold">Données collectées</h2>
      <p className="mt-2 leading-relaxed">
        Lorsque tu t'abonnes, Stripe collecte ton adresse e-mail, ton nom et
        tes données de carte bancaire. Recouvre reçoit ton e-mail et ton nom,
        et ne voit ni ne conserve jamais ton numéro de carte.
      </p>

      <h2 className="mt-8 font-semibold">Pourquoi ces données</h2>
      <p className="mt-2 leading-relaxed">
        Ces données servent à gérer ton abonnement, à t'envoyer ton accès et à
        te répondre si tu nous écris. Elles ne sont ni vendues ni utilisées
        pour de la publicité.
      </p>

      <h2 className="mt-8 font-semibold">Sous-traitants</h2>
      <p className="mt-2 leading-relaxed">
        Stripe (paiement) et Vercel (hébergement) traitent des données pour
        notre compte. Ces prestataires peuvent être situés hors de l'Union
        européenne et appliquent des garanties encadrées par le RGPD.
      </p>

      <h2 className="mt-8 font-semibold">Durée de conservation</h2>
      <p className="mt-2 leading-relaxed">
        Tes données sont conservées pendant la durée de ton abonnement, puis
        pendant la durée légale de conservation des pièces comptables.
      </p>

      <h2 className="mt-8 font-semibold">Tes droits</h2>
      <p className="mt-2 leading-relaxed">
        Tu peux demander l'accès, la rectification ou la suppression de tes
        données en écrivant à [À COMPLÉTER : e-mail de contact]. Tu peux aussi
        introduire une réclamation auprès de la CNIL (cnil.fr).
      </p>

      <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-filet pt-6 text-sm text-gris">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </main>
  );
}
