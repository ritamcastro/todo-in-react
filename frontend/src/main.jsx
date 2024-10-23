import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './ui/organisms/todo-list.jsx'
import Layout from './ui/templates/layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './ui/organisms/details.jsx'

import ToDoApp from './todo-app.jsx'
import ErrorBoundary from './ui/organisms/details-error-boundary.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ToDoApp />,
    children: [
      {
        index: true, element: <TodoList />,
      },
      {
        path: '/details/:id',
        element: <Details />,
        errorElement: <ErrorBoundary />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
