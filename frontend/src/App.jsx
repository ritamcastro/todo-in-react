import {useState } from "react"
const App = () => {

  const [isChecked, setIsChecked] = useState(false)
  

  return  <>
    <header>To-Do in React</header>
    <main>
      <input type="checkbox" 
      checked={isChecked} 
      onChange={() => {setIsChecked(!isChecked)}}
      />
      <input type="text" placeholder='Add a new todo'
      style={{textDecoration: isChecked ? 'line-through' : 'none' }}/>
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
