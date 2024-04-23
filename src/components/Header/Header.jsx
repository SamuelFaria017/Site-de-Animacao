import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

export function Header(){
    const navLinkStyles = ({ isActive }) => {
        return{
            color: isActive ? 'var(--cyan-green)' : 'var(--white)'
        }
    }

    return(
        <header className={styles.header}>
            <NavLink to='/'>
                <span className={styles.title_logo}>Mundo Animado</span>
            </NavLink>
            <nav className={styles.nav_pages}>
                <NavLink style={navLinkStyles} className={styles.navLinks} to="/">Home</NavLink>
                <NavLink style={navLinkStyles} className={styles.navLinks} to="/sobre">Sobre</NavLink>
                <NavLink style={navLinkStyles} className={styles.navLinks} to="/12-principios-animacao">Pricípios animação</NavLink>
                <NavLink style={navLinkStyles} className={styles.navLinks} to="/desenvolvedores">Desenvolvedores</NavLink>
                <NavLink style={navLinkStyles} className={styles.navLinks} to="/recursos">Recursos</NavLink>
                <NavLink className={styles.linkLogin} to="/login">Login</NavLink>
            </nav>
        </header>
    );
}