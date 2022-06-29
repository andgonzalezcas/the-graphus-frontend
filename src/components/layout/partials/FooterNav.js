import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/terms">Terminos y condiciones</Link>
        </li>
        <li>
          <Link to="/about">Acerca de Nosotros</Link>
        </li>
        <li>
          <Link to="/questions">FAQ's</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;