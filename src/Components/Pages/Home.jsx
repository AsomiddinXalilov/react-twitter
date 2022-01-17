import { NavLink } from "react-router-dom";
import useAuth from '../../Hook/useAuth';
import LogoTwitter from '../../Assets/img/twitter.svg';
import HomeLogo from '../../Assets/img/home-logo.svg';
import UsersLogo from '../../Assets/img/users.svg';

function Home(){

    const [token, setToken] = useAuth()

    return(
        <header className="home">
            <div className="home__container">
                <a href="/" className="home__logo-img">
                    <img className="home__logo" src={LogoTwitter} width={40} height={33} alt="twitter logo" />
                </a>

                <nav className="home__nav">
                    <ul className="home__nav__list">
                        <li className="home__item">
                            <a href="/" className="home__logo-img">
                                <img className="home__logo-home" src={HomeLogo} width={40} height={33} alt="twitter logo" />
                            </a>
                            <NavLink to="/" className="home__nav__list-item">home</NavLink>
                        </li>
                        <li className="home__item">
                            <a href="/users" className="home__logo-img">
                                <img className="home__logo-home" src={UsersLogo} width={40} height={33} alt="twitter logo" />
                            </a>
                            <NavLink to="/users" className="home__nav__list-item">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="home__links">
                    {!token && <NavLink to="/login" className="home__nav-list-item">Log In</NavLink>}
                    <NavLink to="/signup" className="home__nav-list-item">Sign Up</NavLink>
                </div>
                <button className="home__logout--button"
                    title="Double click on button !"
                    onDoubleClick={() => setToken(null)}
                >LogOut</button>
            </div>
        </header>
    )
}

export default Home