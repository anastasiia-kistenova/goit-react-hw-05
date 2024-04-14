import css from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';
import clsx from "clsx";

const Navigation = () => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">Home</NavLink>
      <div style={{ marginRight: '20px' }} />
      <NavLink className={getNavLinkClassName} to="/movies">Movies</NavLink>
    </nav>
  )
}

export default Navigation;