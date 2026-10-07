function TaskItem({ tache, onToggle, onSupprimer }) {
  return (
    <li className={tache.terminee ? 'terminee' : ''}>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => onToggle(tache.id)}
      />
      <span className="texte">{tache.texte}</span>
      <button type="button" onClick={() => onSupprimer(tache.id)}>
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
