const InlineCard = ({ item, onToggle, onChangeText, onDelete }) => {
    return <div
        role="listitem"
        key={item.id}
    >
        <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => {
                onToggle(item.id)
            }}
        />
        <input
            type="text"
            placeholder="Add a new todo"
            value={item.text}
            onChange={e => onChangeText(e.target.value)}
            style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
        />
        <button
            aria-label="Delete"
            type="button"
            onClick={() => onDelete(item.id)}
        >
            🗑️
        </button>
    </div>
}

export default InlineCard