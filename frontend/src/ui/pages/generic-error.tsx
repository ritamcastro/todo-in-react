import { Link } from 'react-router-dom'

const GenericError = () => {
  return (
    <>
      <p>💀</p>
      <p>🤨 Where are you? This seems like a wrong turn.</p>
      <p>
        🏠 Time to <Link to="/">go back home</Link>..."
      </p>
    </>
  )
}

export default GenericError
