import InlineCard from '../molecules/inline-card'
import useStorage from '../../hooks/use-storage'

const TodoList = () => {


  const { items, setItems } = useStorage()
  // Attention on () and returns, thanks GPT! ;)
  const onTextChange = (id, value) => {
    const updatedItems = items.map(item => (item.id === id ? { ...item, text: value } : item))

    setItems(updatedItems)
  }

  const onToggleItem = id => {
    const updatedItems = items.map(item => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item
    })
    setItems(updatedItems)
  }

  const onDeleteItem = id => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  const addTodo = () => {
    setItems([...items, { id: Date.now(), isDone: false, text: '' }])
  }

  const sortedItems = [...items].sort((a, b) => a.isDone - b.isDone)

  return (
    <main>
      <button
        type="button"
        onClick={() => addTodo()}
      >
        New
      </button>
      <div role="list">
        {sortedItems.map(item =>
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
