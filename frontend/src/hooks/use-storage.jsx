import { useEffect, useState } from 'react'

const useStorage = () => {
  // As a first approach, let's save on the browser's localStorage for simplicity
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('todoItems')
    return savedItems ? JSON.parse(savedItems) : [{ isDone: false, text: '', id: Date.now() }]
  })

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items))
  }, [items])

  return { items, setItems }
}

export default useStorage
