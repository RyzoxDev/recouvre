import Questions from "./Questions";

export const metadata = {
  title: "Trois questions, Recouvre",
  description: "Trois questions pour chiffrer ce que tes impayés te coûtent.",
};

export default function Commencer() {
  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-8">
      <a href="/" className="font-titre text-xl font-bold">
        Recouvre
      </a>
      <div className="mt-10">
        <Questions />
      </div>
    </main>
  );
}
