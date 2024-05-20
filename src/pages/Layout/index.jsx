import { NavLink } from "react-router-dom";
import { Menu, Sidebar } from 'lucide-react';
import styles from './Layout.module.css';


const Layout = ({ children }) => {
  return (
    <>
      <Menu className={styles.menuIcon}/>
      <nav className={styles.navbar}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/crystals'>Crystals</NavLink>
        <NavLink to='/essentialoils'>Essential Oils</NavLink>
        <NavLink to='/incenses'>Incenses</NavLink>
      </nav>
      <div className={styles.mainContent}>
        {children}
      </div>
    </>
  );
};

export default Layout;
