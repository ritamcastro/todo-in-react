import { useTodos } from '../../hooks/use-todos'
import InlineCard from '../molecules/inline-card'

const TodoList = () => {
  const { items, onTextChange, onToggleItem, onDeleteItem, addTodo } = useTodos()

  return (
    <>
      <button
        type="button"
        onClick={() => addTodo()}
      >
        New
      </button>

      {/* 
      See MDN on list and listitem
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role 
      to fix biome's linting error 
      https://biomejs.dev/linter/rules/use-semantic-elements/
      */}
      <ul
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
      </ul>
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
