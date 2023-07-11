import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const addFlashcard = () => {
    console.log('Add flashcard');
  };

  return (
    <>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <div className='container'>
          <div className='add-flashcard-con'>
            <button id='add-flashcard' onClick={addFlashcard}>
              Add Flashcard
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
