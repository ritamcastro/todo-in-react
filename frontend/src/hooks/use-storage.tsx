import { useEffect, useState } from 'react'
import type { ToDoItem } from '../types/todo'

const useStorage = () => {
  // As a first approach, let's save on the browser's localStorage for simplicity
  const [items, setItems] = useState<ToDoItem[]>(() => {
    const savedItems = localStorage.getItem('todoItems')
    const parsedItems: ToDoItem[] = savedItems ? JSON.parse(savedItems) : []

    return savedItems ? parsedItems : [{ isDone: false, text: '', id: Date.now() }]
  })

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items))
  }, [items])

  return { items, setItems }
}

export default useStorage
