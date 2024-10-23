import { Outlet } from "react-router-dom"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        To-Do in React
      </header>
      <Outlet>{children}</Outlet>
      <footer>Made with 💜</footer>
    </>
  )
}

export default Layout
