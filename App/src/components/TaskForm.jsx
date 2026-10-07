import { useState } from "react";

function TaskForm({ onAjout }) {
  const [texte, setTexte] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texte.trim() === "") return; // refuse vide
    onAjout(texte.trim());
    setTexte(""); // vide le champ
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche…"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
