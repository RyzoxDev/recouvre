export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 pb-12 pt-8">
      <p className="font-titre text-xl font-bold">Recouvre</p>

      <h1 className="mt-12 font-titre text-4xl font-bold leading-tight">
        Tes factures impayées, relancées à ta place.
      </h1>

      <p className="mt-5 text-lg leading-relaxed">
        Relancer un client est gênant, alors tu attends. Recouvre le fait pour
        toi, poliment, jusqu'à la mise en demeure.
      </p>

      <div className="mt-8 border-y border-filet py-4">
        <p className="text-sm text-gris">Pendant que tu attends</p>
        <p className="mt-1 font-chiffre text-2xl text-brique">
          L'argent dû reste dû.
        </p>
      </div>

      <ul className="mt-8 space-y-5">
        <li>
          <p className="font-semibold">Relances automatiques</p>
          <p className="text-gris">
            Un e-mail poli à 7, 15 et 30 jours après l'échéance.
          </p>
        </li>
        <li>
          <p className="font-semibold">Mise en demeure prête</p>
          <p className="text-gris">
            La lettre est rédigée, tu n'as plus qu'à l'envoyer.
          </p>
        </li>
        <li>
          <p className="font-semibold">Un tableau clair</p>
          <p className="text-gris">
            Ce qui est dû, relancé et encaissé, en euros.
          </p>
        </li>
      </ul>

      <a
        href="/commencer"
        className="mt-10 block rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier"
      >
        Commencer, c'est gratuit
      </a>
      <p className="mt-3 text-center text-sm text-gris">
        3 questions, puis 29 €/mois si tu continues. Sans engagement.
      </p>

      <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-filet pt-6 text-sm text-gris">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </main>

  );
}
