/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.scss';
import Logo from '../../atoms/logo/Logo';
import Menu from '../../atoms/menu/Menu';

const Header = () => {
  return (
    <div className='container header'>
      <Logo />
      <Menu />
    </div>
  )
}

export default Header;