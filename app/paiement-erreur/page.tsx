export const metadata = {
  title: "Le paiement n'a pas abouti, Recouvre",
};

export default function PaiementErreur() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <p className="font-titre text-xl font-bold">Recouvre</p>

      <h1 className="mt-10 font-titre text-4xl font-bold leading-tight">
        Le paiement n'a pas abouti.
      </h1>

      <p className="mt-5 text-lg leading-relaxed">
        Rien n'a été débité. Tu peux réessayer, ou revenir à l'accueil.
      </p>

      <a
        href="/api/checkout"
        className="mt-10 block rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier"
      >
        Réessayer
      </a>
      <a
        href="/"
        className="mt-4 block rounded-sm border border-encre px-6 py-4 text-center font-semibold"
      >
        Retour à l'accueil
      </a>
    </main>
  );
}
