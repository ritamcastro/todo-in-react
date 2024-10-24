import { Outlet } from 'react-router-dom'
import Layout from './ui/templates/layout'

const ToDoApp = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default ToDoApp
