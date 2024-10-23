import { useState } from 'react'
import { useParams } from 'react-router-dom'
import type { ToDoItem } from '../../types/todo'

type RouteParams = {
  id: string
}

const Details = () => {
  const { id } = useParams<RouteParams>()

  const [item, _setItem] = useState<ToDoItem>(() => {
    const savedItems = localStorage.getItem('todoItems')
    const parsedItems: ToDoItem[] = savedItems ? JSON.parse(savedItems) : []

    const foundItem = parsedItems.find(item => item.id === Number(id))
    if (!foundItem) {
      throw new Error(`Item with ID ${id} not found`)
    }

    return foundItem
  })

  return (
    <>
      <h1>Detailed ToDo</h1>
      <h2>Title: {item.text}</h2>
    </>
  )
}

export default Details
