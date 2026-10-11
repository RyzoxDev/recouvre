"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function Formulaire() {
  const [email, setEmail] = useState("");
  const [etat, setEtat] = useState<"repos" | "envoi" | "envoye" | "erreur">(
    "repos"
  );

  async function envoyer(e: React.FormEvent) {
    e.preventDefault();
    setEtat("envoi");

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) {
      alert(error.message);
    }
    setEtat(error ? "erreur" : "envoye");

  }

  if (etat === "envoye") {
    return (
      <div>
        <h1 className="font-titre text-3xl font-bold leading-tight">
          Regarde tes e-mails.
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          Un lien de connexion vient d'être envoyé à {email}. Touche-le pour
          entrer. Pense à vérifier tes courriers indésirables.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={envoyer}>
      <h1 className="font-titre text-3xl font-bold leading-tight">
        Connexion
      </h1>
      <p className="mt-4 leading-relaxed">
        Entre ton e-mail : tu reçois un lien, un clic et tu es dedans.
      </p>

      <label htmlFor="email" className="mt-8 block text-sm text-gris">
        Ton adresse e-mail
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 block w-full rounded-sm border border-encre bg-white px-4 py-4 text-lg"
      />

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="mt-6 block w-full rounded-sm bg-brique px-6 py-4 text-center text-lg font-semibold text-papier disabled:opacity-60"
      >
        {etat === "envoi" ? "Envoi en cours..." : "Recevoir mon lien"}
      </button>

      {etat === "erreur" && (
        <p className="mt-4 text-sm text-brique">
          Le lien n'a pas pu être envoyé. Vérifie l'adresse et réessaie.
        </p>
      )}
    </form>
  );
}
