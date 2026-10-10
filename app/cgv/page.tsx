export const metadata = {
  title: "Conditions générales de vente, Recouvre",
};

export default function Cgv() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <h1 className="mt-10 font-titre text-3xl font-bold leading-tight">
        Conditions générales de vente
      </h1>

      <h2 className="mt-8 font-semibold">1. Vendeur</h2>
      <p className="mt-2 leading-relaxed">
        [À COMPLÉTER : prénom et nom], entrepreneur individuel, SIRET
        [À COMPLÉTER : SIRET], [À COMPLÉTER : adresse]. Contact :
        [À COMPLÉTER : e-mail de contact].
      </p>

      <h2 className="mt-8 font-semibold">2. Service</h2>
      <p className="mt-2 leading-relaxed">
        Recouvre est un service en ligne qui aide à relancer les factures
        impayées : relances écrites automatiques, lettre de mise en demeure et
        tableau de suivi. Le service est destiné aux professionnels.
      </p>

      <h2 className="mt-8 font-semibold">3. Accès anticipé</h2>
      <p className="mt-2 leading-relaxed">
        Tant que le service est en accès anticipé, certaines fonctionnalités
        sont encore en cours de construction. L'accès complet est ouvert par
        e-mail. Date prévue : [À COMPLÉTER : date].
      </p>

      <h2 className="mt-8 font-semibold">4. Prix et paiement</h2>
      <p className="mt-2 leading-relaxed">
        L'abonnement coûte 29 € par mois, factures illimitées. Le prix est
        indiqué en euros. [À COMPLÉTER : mention TVA, par exemple « TVA non
        applicable, art. 293 B du CGI » si tu es en franchise en base]. Le
        paiement se fait par carte bancaire, via Stripe, et l'abonnement se
        renouvelle chaque mois.
      </p>

      <h2 className="mt-8 font-semibold">5. Résiliation</h2>
      <p className="mt-2 leading-relaxed">
        L'abonnement est sans engagement. Tu peux le résilier à tout moment ;
        la résiliation prend effet à la fin de la période déjà payée.
      </p>

      <h2 className="mt-8 font-semibold">6. Satisfait ou remboursé</h2>
      <p className="mt-2 leading-relaxed">
        Pendant [À COMPLÉTER : durée, par exemple 30] jours après ton premier
        paiement, tu peux demander le remboursement intégral, sans justificatif.
        Il suffit d'écrire à [À COMPLÉTER : e-mail de contact]. Le
        remboursement est effectué sous [À COMPLÉTER : délai, par exemple 5]
        jours ouvrés, sur la carte utilisée pour le paiement.
      </p>

      <h2 className="mt-8 font-semibold">7. Responsabilité</h2>
      <p className="mt-2 leading-relaxed">
        Recouvre fournit des outils et des modèles de courriers. Le service ne
        garantit pas le paiement des factures et ne constitue pas un conseil
        juridique. La lettre de mise en demeure n'a de valeur renforcée que
        lorsqu'elle est envoyée en recommandé avec accusé de réception.
      </p>

      <h2 className="mt-8 font-semibold">8. Données personnelles</h2>
      <p className="mt-2 leading-relaxed">
        Voir la page{" "}
        <a href="/confidentialite" className="underline">
          Confidentialité
        </a>
        .
      </p>

      <h2 className="mt-8 font-semibold">9. Litiges</h2>
      <p className="mt-2 leading-relaxed">
        Les présentes conditions sont soumises au droit français. En cas de
        litige, une solution amiable sera recherchée en priorité.
      </p>

      <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-filet pt-6 text-sm text-gris">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </main>
  );
}
