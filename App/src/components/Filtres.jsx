const OPTIONS = [
  { valeur: "toutes", label: "Toutes" },
  { valeur: "en-cours", label: "En cours" },
  { valeur: "terminees", label: "Terminées" },
];

function Filtres({ filtre, onChangeFiltre }) {
  return (
    <div className="filtres">
      {OPTIONS.map((o) => (
        <button
          key={o.valeur}
          type="button"
          className={filtre === o.valeur ? "actif" : ""}
          onClick={() => onChangeFiltre(o.valeur)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default Filtres;
