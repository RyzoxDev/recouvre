export const metadata = {
  title: "Mentions légales, Recouvre",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>

      <h1 className="mt-10 font-titre text-3xl font-bold leading-tight">
        Mentions légales
      </h1>

      <h2 className="mt-8 font-semibold">Éditeur du site</h2>
      <p className="mt-2 leading-relaxed">
        [À COMPLÉTER : prénom et nom], entrepreneur individuel.
        <br />
        SIRET : [À COMPLÉTER : SIRET]
        <br />
        Adresse : [À COMPLÉTER : adresse]
        <br />
        E-mail : [À COMPLÉTER : e-mail de contact]
      </p>

      <h2 className="mt-8 font-semibold">Directeur de la publication</h2>
      <p className="mt-2 leading-relaxed">[À COMPLÉTER : prénom et nom]</p>

      <h2 className="mt-8 font-semibold">Hébergeur</h2>
      <p className="mt-2 leading-relaxed">
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
      </p>

      <h2 className="mt-8 font-semibold">Paiements</h2>
      <p className="mt-2 leading-relaxed">
        Les paiements sont traités par Stripe. Recouvre ne conserve jamais
        tes données de carte bancaire.
      </p>

      <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-filet pt-6 text-sm text-gris">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </main>
  );
}
