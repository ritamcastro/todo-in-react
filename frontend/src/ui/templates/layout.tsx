import type { JSX, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
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
