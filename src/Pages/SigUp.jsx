import useAuth  from "./../Hook/useAuth"

function Signup() {
    const [token, setToken] = useAuth()

    return(
        <div className="signup">
            <div className="signup__container">
                {/* <img src={Logo} alt="twitter logo" width={50} height={41} className="signup__image-logo"/> */}
                <h1 className="signup__about--heading">Log in to Twitter</h1>
                <form className="signup__form">
                    <input type="text" className="signup__enterin-with-phone-number-or-email" placeholder="Phone number, email address"/>
                    <input type="password" placeholder="Password" className="signup__enterin-with-password" />
                </form>

                <button className="signup__enterin--home-page" onClick={e => setToken("welcome")}>Sign up</button>
            </div>
        </div>
    )
}

export default Signup