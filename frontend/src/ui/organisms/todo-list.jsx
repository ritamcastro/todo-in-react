import InlineCard from '../molecules/inline-card'
import useTodos from '../../hooks/use-todos'

const TodoList = () => {

  const { items,
    onTextChange, onToggleItem, onDeleteItem, addTodo
  } = useTodos()

  return (
    <main>
      <button
        type="button"
        onClick={() => addTodo()}
      >
        New
      </button>
      <div role="list">
        {items.map(item =>
          <InlineCard key={item.id}
            item={item}
            onToggle={() => onToggleItem(item.id)}
            onChangeText={newText => onTextChange(item.id, newText)}
            onDelete={() => onDeleteItem(item.id)}
          />
        )}
      </div>
    </main>
  )
}

// The same as this one ;)
// function App() {
//   return (
//     <>
//     <header>To-Do in React</header>
//     <main>
//       <input type="checkbox"/>
//       <input type="text" placeholder='Add a new todo'/>
//     </main>
//     <footer>Made with 💜</footer>
//     </>
//   )
// }

export default TodoList
