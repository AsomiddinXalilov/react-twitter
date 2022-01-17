import { NavLink } from "react-router-dom"
import HomeLogo from '../../Assets/img/home-logo.svg'
import UsersLogo from '../../Assets/img/users.svg'
import LogoTwitter from '../../Assets/img/twitter.svg'
import useAuth from "../../Hook/useAuth"






// import * as React from "react";
// import "./styles.css";
// export default function App() {
//   const [users, setUsers] = React.useState([]);
//   const f = async () => {
//     const res = await fetch("https://reqres.in/api/users/");
//     const json = await res.json();
//     setUsers(json.data);
//   };
//   React.useEffect(() => {
//     f();
//   }, []);
//   return (
//     <div className="App">
//       <h1>Hello ReqRes users!</h1>
//       <div className="flex">
//         {users.length &&
//           users.map((user) => {
//             return (
//               <div key={user.id}>
//                 <p>
//                   <strong>{user.first_name}</strong>
//                 </p>
//                 <p>{user.email}</p>
//                 <img key={user.avatar} src={user.avatar} />
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }





function Users() {
    const [token, setToken] = useAuth()


    return(
        <main className="users">
            <nav className="users__nav">
            <a href="/" className="home__logo-img">
                    <img className="home__logo" src={LogoTwitter} width={40} height={33} alt="twitter logo" />
                </a>
                    <ul className="users__nav__list">
                        <li className="users__item">
                            <a href="/" className="users__logo-img">
                                <img className="users__logo-users" src={HomeLogo} width={40} height={33} alt="twitter logo" />
                            </a>
                            <NavLink to="/" className="users__nav__list-item">Home</NavLink>
                        </li>
                        <li className="users__item">
                            <a href="/users" className="users__logo-img">
                                <img className="users__logo-users" src={UsersLogo} width={40} height={33} alt="twitter logo" />
                            </a>
                            <NavLink to="/users" className="users__nav__list-item">Users</NavLink>
                        </li>
                    </ul>

                    <button className="home__logout--button"
                    title="Double click on button !"
                    onDoubleClick={() => setToken(null)}
                >LogOut</button>
                </nav>  
            <div className="users__container">
                <h1>users</h1>
            </div>
        </main>
    )
}

export default Users