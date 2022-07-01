import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import Logo from './partials/Logo';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { setToken } from './tokenSlice'
import { setUser } from './userSlice';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  setHideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  
  const [isActive, setIsactive] = useState(false);
  
  const nav = useRef(null);
  const hamburger = useRef(null);
  
  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  const dispatch = useDispatch();

  const responseGoogle = (googleResponse) => {

    const URL = process.env.REACT_APP_BACKEND_HOST + "/users/login"
    if (googleResponse.tokenId) {
      const data = { tokenId: googleResponse.tokenId }
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
        .then(response => {
          dispatch(setToken(response.success.authorization.access_token))
          dispatch(setUser({
            'name': `${googleResponse.profileObj.givenName} ${googleResponse.profileObj.familyName}`,
            'image': googleResponse.profileObj.imageUrl,
            'googleId': googleResponse.tokenId
          }))
          handleLogin();
        })
        .catch(error => console.error('Error:', error))
    }
  }

  let history = useHistory();
  const handleLogin = () => {
    setHideSignin(!hideSignin)
    history.push('/');
  }

  const responseGoogleLogOut = () => {
    dispatch(setToken(''))
    dispatch(setUser({
      'name': '',
      'image': ''
    }))
    handleLogin();
  }

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="/searcher" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Searcher</Link>
                    </li>
                    {
                      hideSignin ?
                        <>
                          <li>
                            <Link to="/progress" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Progress</Link>
                          </li>
                          <li>
                            <Link to="/curriculum" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Curriculum</Link>
                          </li>
                        </> :
                        <></>
                    }
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <GoogleLogin
                          clientId={process.env.REACT_APP_CLIENT_ID_GOOGLE}
                          render={renderProps => (
                            <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={renderProps.onClick}>LogIn</Link>
                          )}
                          buttonText="Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                        />
                      </li>
                    </ul>}
                  {hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <GoogleLogout
                          clientId={process.env.REACT_APP_CLIENT_ID_GOOGLE}
                          render={renderProps => (
                            <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={renderProps.onClick}>Logout</Link>
                            // <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" onClick={renderProps.onClick}>Login</button>
                          )}
                          buttonText="Logout"
                          onLogoutSuccess={responseGoogleLogOut}
                        >
                        </GoogleLogout>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
