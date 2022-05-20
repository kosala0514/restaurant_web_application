import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbar_elements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1>FoodHut</h1>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/foods' activeStyle>
            Foods
          </NavLink>
          <NavLink to='/drinks' activeStyle>
            Drinks
          </NavLink>
          <NavLink to='/reservation' activeStyle>
            Reservation
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;