import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks'
import { Menu, Spinner } from '../ui'

export const BalanceLayout = () => {
  const { userLogged, loading } = useAuthContext()

  return (
    <>
      <main
        className="BalanceLayout Layout"
        style={{
          maxHeight: `calc(100vh - ${
            document.body.scrollHeight - window.innerHeight
          } - var(--menu-height))px`
        }}
      >
        {loading ? (
          <Spinner />
        ) : userLogged._id.length > 0 ? (
          <>
            <Outlet />
          </>
        ) : (
          <Navigate to="/" />
        )}
        <Menu />
      </main>
    </>
  )
}
