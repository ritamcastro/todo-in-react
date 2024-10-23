import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './ui/organisms/details.jsx'
import TodoList from './ui/organisms/todo-list.jsx'

import ToDoApp from './todo-app.jsx'
import ErrorBoundary from './ui/organisms/details-error-boundary.jsx'
import GenericError from './ui/pages/generic-error.jsx'
import Layout from './ui/templates/layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ToDoApp />,
    errorElement: (
      <Layout>
        <GenericError />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <TodoList />
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
