import { Button, Checkbox, Input, ListItem, ListItemButton } from '@mui/material'
import type React from 'react'
import { useNavigate } from 'react-router-dom'
import type { ToDoItem } from '../../types/todo'

interface Props {
  item: ToDoItem
  onChangeText: (text: string) => void
  onToggle: () => void
  onDelete: (id: number) => void
}

const InlineCard: React.FC<Props> = ({ item, onChangeText, onToggle, onDelete }) => {
  const navigate = useNavigate()

  const ariaLabelForCheckbox = `Mark todo "${item.text}" as ${item.isDone ? 'done' : 'not done'}`

  return (
    <ListItem key={item.id}>
      <Checkbox
        aria-checked={item.isDone}
        aria-label={ariaLabelForCheckbox}
        checked={item.isDone}
        onChange={() => {
          onToggle()
        }}
      />
      <Input
        type="text"
        placeholder="Add a new todo"
        value={item.text}
        onChange={e => onChangeText(e.target.value)}
        style={{ textDecoration: item.isDone ? 'ListItemne-through' : 'none' }}
      />
      <ListItemButton
        aria-label="See more"
        onClick={() => navigate(`/details/${item.id}`)}
      >
        👀
      </ListItemButton>
      <Button
        onClick={() => onDelete(item.id)}
        aria-label="Delete"
      >
        🗑️
      </Button>
    </ListItem>
  )
}

export default InlineCard
