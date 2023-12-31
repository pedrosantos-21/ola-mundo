import React from 'react';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Início
        </MenuLink>
        <MenuLink className={styles.link} to="/sobremim">
          Sobre mim
        </MenuLink>
      </nav>
    </header>
  )
}
