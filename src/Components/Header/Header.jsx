import {NavLink} from "react-router-dom"

function Header(){
  return(
    <>
    <h1>Header</h1>
    <header>
        <nav>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    </header>

  </>  
  )
}
export default Header