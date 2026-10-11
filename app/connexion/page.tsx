import Formulaire from "./Formulaire";

export const metadata = {
  title: "Connexion, Recouvre",
};

export default function Connexion() {
  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>
      <div className="mt-10">
        <Formulaire />
      </div>

      <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-filet pt-6 text-sm text-gris">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/cgv">CGV</a>
        <a href="/confidentialite">Confidentialité</a>
      </nav>
    </main>
  );
}
