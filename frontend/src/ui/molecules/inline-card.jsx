import { useNavigate } from 'react-router-dom'

const InlineCard = ({ item, onToggle, onChangeText, onDelete }) => {
    const navigate = useNavigate()

    const ariaLabelForCheckbox = `Mark todo "${item.text}" as ${item.isDone ? "done" : "not done"}`

    return (
        <div
            role="listitem"
            key={item.id}
        >
            <input
                aria-checked={item.isDone}
                aria-label={ariaLabelForCheckbox}
                type="checkbox"
                checked={item.isDone}
                onChange={() => {
                    onToggle()
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
                aria-label="See more"
                type="button"
                onClick={() => navigate(`/details/${item.id}`)}
            >
                👀
            </button>
            <button
                aria-label="Delete"
                type="button"
                onClick={() => onDelete(item.id)}
            >
                🗑️
            </button>
        </div>
    )
}

export default InlineCard
