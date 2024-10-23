import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './ui/organisms/todo-list.jsx'
import Layout from './ui/templates/layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <TodoList />
    </Layout>
  </StrictMode>
)
