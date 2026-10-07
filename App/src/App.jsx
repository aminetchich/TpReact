import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Compteur from "./components/Compteur";
import Filtres from "./components/Filtres";
import "./App.css";

function App() {
  const [taches, setTaches] = useState([
    { id: 1, texte: "Réviser le chapitre 3", terminee: false },
    { id: 2, texte: "Envoyer le rapport à M. Dubois", terminee: true },
    { id: 3, texte: "Préparer la réunion de lundi", terminee: false },
  ]);
  const [filtre, setFiltre] = useState("toutes");

  // Ajout à la fin sans muter le tableau
  const ajouterTache = (texte) => {
    const nouvelle = { id: crypto.randomUUID(), texte, terminee: false };
    setTaches((prev) => [...prev, nouvelle]);
  };

  // Nouveau objet

  const basculerTache = (id) => {
    setTaches((prev) =>
      prev.map((t) => (t.id === id ? { ...t, terminee: !t.terminee } : t)),
    );
  };

  const supprimerTache = (id) => {
    setTaches((prev) => prev.filter((t) => t.id !== id));
  };

  const supprimerTerminees = () => {
    setTaches((prev) => prev.filter((t) => !t.terminee));
  };

  const toutMarquerFait = () => {
    setTaches((prev) => prev.map((t) => ({ ...t, terminee: true })));
  };

  const tachesVisibles = taches.filter((t) => {
    if (filtre === "en-cours") return !t.terminee;
    if (filtre === "terminees") return t.terminee;
    return true;
  });

  return (
    <main>
      <h1>Mes tâches</h1>
      <TaskForm onAjout={ajouterTache} />
      <Filtres filtre={filtre} onChangeFiltre={setFiltre} />
      <TaskList
        taches={tachesVisibles}
        onToggle={basculerTache}
        onSupprimer={supprimerTache}
      />
      <Compteur taches={taches} />
      <div className="actions">
        <button type="button" onClick={supprimerTerminees}>
          Supprimer les terminées
        </button>
        <button type="button" onClick={toutMarquerFait}>
          Tout marquer comme fait
        </button>
      </div>
    </main>
  );
}

export default App;
