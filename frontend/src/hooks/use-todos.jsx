import useStorage from './use-storage'

const useTodos = () => {
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

  return {
    items: sortedItems,
    onTextChange,
    onToggleItem,
    onDeleteItem,
    addTodo
  }
}

export default useTodos
