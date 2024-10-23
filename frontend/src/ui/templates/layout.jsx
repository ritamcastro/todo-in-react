import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link
          aria-label="Home"
          to={'/'}
        >
          🏠
        </Link>
        To-Do in React
      </header>
      <main>{children}</main>
      <footer>Made with 💜</footer>
    </>
  )
}

export default Layout
