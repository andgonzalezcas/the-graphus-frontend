import React, { useState } from 'react';
import Header from '../components/layout/TempHeader';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => {
  const [hideSignin, setHideSignin] = useState(false)

  return(
    <>
      <Header navPosition="right" className="reveal-from-bottom" hideSignin={hideSignin} setHideSignin={setHideSignin}/>
      <main className="site-content">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LayoutDefault;  