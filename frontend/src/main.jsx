import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './ui/organisms/todo-list.jsx'
import Layout from './ui/templates/layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './ui/organisms/details.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <TodoList /> },
      {
        path: '/details/:id',
        element: <Details />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
