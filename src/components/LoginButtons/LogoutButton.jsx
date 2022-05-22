import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { setToken } from '../../feature/tokenSlice'

const LogoutButton = (props) => {
  const dispatch = useDispatch()

  const responseGoogle = (response) => {
    dispatch(setToken({ token: '' }))
    props.handleLogin()
  }

  return (
    <>
      <GoogleLogout
        clientId = { process.env.REACT_APP_CLIENT_ID_GOOGLE }
        render={renderProps => (
          <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={renderProps.onClick}>Logout</button>
        )}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      >
      </GoogleLogout>
    </>
  )
}

export default LogoutButton