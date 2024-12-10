import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
        {
          !loginCheck ? (
            <>
              <li className='nav-item'>
                <button type='button' className='logButton'>
                  <Link to='/login' className='logLink'>Login</Link>
                </button>
              </li><li className='nav-item'>
                <button type='button' className='logButton'>
                  <Link to='/signup' className='logLink'>Sign Up</Link>
                </button>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <button type='button' className='logButton'onClick={() => {
                auth.logout();
              }}><span className='hoverFix'>Logout</span></button>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Navbar;
