import { useState } from "react"

const App = () => {

  const [items, setItems] = useState([{ id: Date.now(), isDone: false, text: "" }])

  // Attention on () and returns, thanks GPT! ;)
  const onTextChange = (id, value) => {
    const updatedItems = items.map((item) => (item.id === id ? { ...item, text: value } : item))

    setItems(updatedItems)
  }

  const onToggleItem = (id) => {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item
    })

    setItems(updatedItems)
  }
  const addTodo = () => {
    setItems([...items, { id: Date.now(), isDone: false, text: "" }])
  }

  return <>
    <header>To-Do in React</header>
    <main>
      <button onClick={() => addTodo()}>New</button>
      <div role="list">
        {items.map((item) => {
          return <div
            role="listitem"
            key={item.id}>
            <input type="checkbox"
              checked={item.isDone}
              onChange={() => { onToggleItem(item.id) }}
            />
            <input type="text" placeholder='Add a new todo'
              value={item.text}
              onChange={(e) => onTextChange(item.id, e.target.value)}
              style={{ textDecoration: item.isDone ? 'line-through' : 'none' }} />
          </div>
        })}
      </div>
    </main>
    <footer>Made with 💜</footer>
  </>

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

export default App
