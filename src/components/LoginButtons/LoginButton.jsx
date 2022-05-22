import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { setToken } from '../../feature/tokenSlice'

const LoginButton = (props) => {
  const dispatch = useDispatch()

  const responseGoogle = (response) => {
    if(response.tokenId){
      dispatch(setToken({ token: response.tokenId }))
      props.handleLogin()
    }
  }

  return (
    <>
      <GoogleLogin
        clientId = { process.env.REACT_APP_CLIENT_ID_GOOGLE }
        render={renderProps => (
          <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={renderProps.onClick}>Login</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}

export default LoginButton