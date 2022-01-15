import "./Header.scss"
import { NavLink } from "react-router-dom"
import useAuth from './../../Hook/useAuth';

function Header(){

    const [token] = useAuth()

    return(
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <NavLink to="/" className="header__nav__list-item">home</NavLink>
                    <NavLink to="/users" className="header__nav__list-item">Users</NavLink>
                    {!token && <NavLink to="/login" className="header__nav__list-item">Log In</NavLink>}
                    <NavLink to="/signup" className="header__nav__list-item">Sign Up</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header