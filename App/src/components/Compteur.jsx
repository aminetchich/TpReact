function Compteur({ taches }) {
  const restantes = taches.filter((t) => !t.terminee).length;

  let texte;
  if (restantes === 0) texte = "Tout est fait";
  else if (restantes === 1) texte = "1 tâche restante";
  else texte = `${restantes} tâches restantes`;

  return <p className="compteur">{texte}</p>;
}

export default Compteur;
