import useAuth  from "../../Hook/useAuth"
import Logo from '../../Assets/img/twitter.svg'

function Login() {
    const [token, setToken] = useAuth()

    return(
        <div className="login">
            <div className="login__container">
                <a href="/" className="link"><img src={Logo} alt="twitter logo" width={50} height={41} className="login__image-logo"/></a>
                <h1 className="login__about--heading">Log in to Twitter</h1>
                <form className="login__form">
                    <input type="text" className="login__enterin-with-phone-number-or-email" placeholder="Phone number, email address"/>
                    <input type="password" placeholder="Password" className="login__enterin-with-password" />
                </form>

                <button className="login__enterin--home-page" onClick={e => setToken("welcome")}>Log In</button>
                
                <div className="login__forgots">
                    <a href="" className="login__forgon--password">Forgot password?</a>
                    <a href="/signup" className="login__signup-to-twitter">Sign up to Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Login