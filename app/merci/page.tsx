export const metadata = {
  title: "Merci, ta place est réservée, Recouvre",
};

export default function Merci() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <p className="font-titre text-xl font-bold">Recouvre</p>

      <h1 className="mt-10 font-titre text-4xl font-bold leading-tight">
        Merci. Ta place est réservée.
      </h1>

      <p className="mt-5 text-lg leading-relaxed">
        Ton paiement est bien reçu. Recouvre est en accès anticipé : je finis
        de construire le produit et je t'écris par e-mail dès que ton accès
        est ouvert.
      </p>

      <div className="mt-8 border-y border-filet py-4">
        <p className="text-sm text-gris">Si tu changes d'avis</p>
        <p className="mt-1">
          Réponds simplement à l'e-mail de confirmation de Stripe : tu es
          remboursé.
        </p>
      </div>

      <a
        href="/"
        className="mt-10 block rounded-sm border border-encre px-6 py-4 text-center font-semibold"
      >
        Retour à l'accueil
      </a>
    </main>
  );
}
