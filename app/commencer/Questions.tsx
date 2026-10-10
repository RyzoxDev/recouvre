"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const QUESTIONS = [
  {
    titre: "Combien d'argent te doit-on en ce moment ?",
    options: [
      "Moins de 1 000 €",
      "1 000 à 5 000 €",
      "5 000 à 15 000 €",
      "Plus de 15 000 €",
    ],
  },
  {
    titre: "Depuis quand dure ton plus ancien impayé ?",
    options: ["Moins d'un mois", "Un à trois mois", "Plus de trois mois"],
  },
  {
    titre: "Qu'est-ce qui t'empêche de relancer ?",
    options: [
      "C'est gênant, je repousse",
      "Je n'ai pas le temps",
      "Je ne sais pas quoi écrire",
    ],
  },
];

export default function Questions() {
  const router = useRouter();
  const [etape, setEtape] = useState(0);
  const [reponses, setReponses] = useState<number[]>([]);

  function choisir(index: number) {
    const suite = [...reponses, index];
    if (etape < QUESTIONS.length - 1) {
      setReponses(suite);
      setEtape(etape + 1);
    } else {
      router.push(
        `/commencer/resultat?a=${suite[0]}&b=${suite[1]}&c=${suite[2]}`
      );
    }
  }

  function retour() {
    setReponses(reponses.slice(0, -1));
    setEtape(etape - 1);
  }

  const question = QUESTIONS[etape];

  return (
    <div>
      <p className="font-chiffre text-sm text-gris">
        Question {etape + 1} sur {QUESTIONS.length}
      </p>
      <div className="mt-2 h-1 w-full bg-filet">
        <div
          className="h-1 bg-brique"
          style={{ width: `${((etape + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>

      <h1 className="mt-10 font-titre text-3xl font-bold leading-tight">
        {question.titre}
      </h1>

      <div className="mt-8 space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => choisir(index)}
            className="block w-full rounded-sm border border-encre px-5 py-4 text-left text-lg font-semibold"
          >
            {option}
          </button>
        ))}
      </div>

      {etape > 0 && (
        <button
          type="button"
          onClick={retour}
          className="mt-8 text-sm text-gris underline"
        >
          Retour
        </button>
      )}
    </div>
  );
}
