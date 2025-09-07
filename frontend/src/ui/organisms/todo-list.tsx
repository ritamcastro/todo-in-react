import { Button, List } from '@mui/material'
import { useTodos } from '../../hooks/use-todos'
import InlineCard from '../molecules/inline-card'

const TodoList = () => {
  const { items, onTextChange, onToggleItem, onDeleteItem, addTodo } = useTodos()

  return (
    <>
      <Button onClick={() => addTodo()}>New</Button>

      {/* 
      See MDN on list and listitem
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role 
      to fix biome's linting error 
      https://biomejs.dev/linter/rules/use-semantic-elements/
      */}
      <List
        style={{
          listStyle: 'none none',
          paddingInlineStart: 0,
          marginBlock: 0
        }}
      >
        {items.map(item => (
          <InlineCard
            key={item.id}
            item={item}
            onToggle={() => onToggleItem(item.id)}
            onChangeText={newText => onTextChange(item.id, newText)}
            onDelete={() => onDeleteItem(item.id)}
          />
        ))}
      </List>
    </>
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
