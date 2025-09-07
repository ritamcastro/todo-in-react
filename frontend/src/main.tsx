import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ToDoApp from './todo-app'
import Details from './ui/organisms/details'
import DetailsErrorBoundary from './ui/organisms/details-error-boundary'
import TodoList from './ui/organisms/todo-list'
import GenericError from './ui/pages/generic-error'
import Layout from './ui/templates/layout'

const router = createBrowserRouter(
  [
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
          errorElement: <DetailsErrorBoundary />
        }
      ]
    }
  ],
  { basename: process.env.NODE_ENV === 'dev' ? '/' : '/todo-in-react/' }
)

const rootContainer: Element | DocumentFragment | null = document.getElementById('root')

if (rootContainer) {
  const root = createRoot(rootContainer)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
