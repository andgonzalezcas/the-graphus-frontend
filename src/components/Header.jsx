import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginButton from './LoginButtons/LoginButton'
import LogoutButton from './LoginButtons/LogoutButton'

const Header = () => {

  const [isLogged, setIsLogged] = useState(false)
  let navigate = useNavigate();
  const handleLogin = () => {
    setIsLogged(!isLogged)
    return navigate("/");
  }

  return (
    <nav className="border-gray-200 sm:px-10 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to='/' className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TGP</span>
        </Link>
        {
          !isLogged ?
          <>
            <div className="flex md:order-2">
              <LoginButton handleLogin={handleLogin}/> :
            </div>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4"></div>
          </>
          :
          <>
            <div className="flex md:order-2">
              <LogoutButton handleLogin={handleLogin}/>
              <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-500 md:hover:text-orange-600 md:p-0 dark:text-white" aria-current="page" to='/'>Home</Link>
                </li>
                <li>
                  <Link className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-slate-400 dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to='/Curriculum'>Curriculum</Link>
                </li>
                <li>
                  <Link className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-slate-400 dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/Progress">Progress</Link>
                </li>
                <li>
                  <Link className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-slate-400 dark:text-slate-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/Schedule">Schedule</Link>
                </li>
              </ul>
            </div>
          </>
        }
      </div>
    </nav>
  )
}

export default Header