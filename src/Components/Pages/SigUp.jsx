import useAuth  from "../../Hook/useAuth"
import LogoTwitter from '../../Assets/img/twitter.svg'
import { NavLink } from "react-router-dom";

function Signup() {
    const [token, setToken] = useAuth();

    return(
        <div className="signup">
            <div className="signup__container">
                <a href="" className="signup__logo-link">
                    <img src={LogoTwitter} alt="twitter logo" width={50} height={41} className="signup__image-logo"/>
                </a>
                <h1 className="signup__about--heading">Create an account</h1>
                <form className="signup__form">
                    <input type="text" name="username" className="signup__enterin-with-phone-number-or-email" placeholder="Name"/>
                    <input type="tel" name="usePhoneNumber" placeholder="Phone number" className="signup__enterin-with-password" />
                </form>
                <a href="#" className="signup__use-email">Use email</a>

                <a href="/login" className="signup__login">Log In</a>

                <h2 className="signup__little-heading">Date of birth</h2>
                <p className="signup__text">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                </p>
                <form className="signup__select">
                    <select  className="signup__select-moth">
                        <option value="Moth" className="signup__option-moth">Month</option> 
                        <option value="January" className="signup__option-moth">January</option>
                        <option value="February" className="signup__option-moth">February</option>
                        <option value="March" className="signup__option-moth">March</option>
                        <option value="April" className="signup__option-moth">April</option>
                        <option value="May" className="signup__option-moth">May</option>
                        <option value="June" className="signup__option-moth">June</option>
                        <option value="July" className="signup__option-moth">July</option>
                        <option value="August" className="signup__option-moth">August</option>
                        <option value="September" className="signup__option-moth">September</option>
                        <option value="October" className="signup__option-moth">October</option>
                        <option value="November" className="signup__option-moth">November</option>
                        <option value="December" className="signup__option-moth">December</option>
                    </select>

                    <select  className="signup__select-day">
                        <option value="day" className="signup__option-day">Day</option>
                        <option value="1" className="signup__option-day">1</option>
                        <option value="2" className="signup__option-day">2</option>
                        <option value="3" className="signup__option-day">3</option>
                        <option value="4" className="signup__option-day">4</option>
                        <option value="5" className="signup__option-day">5</option>
                        <option value="6" className="signup__option-day">6</option>
                        <option value="7" className="signup__option-day">7</option>
                        <option value="8" className="signup__option-day">8</option>
                        <option value="9" className="signup__option-day">9</option>
                        <option value="10" className="signup__option-day">10</option>
                        <option value="11" className="signup__option-day">11</option>
                        <option value="12" className="signup__option-day">12</option>
                        <option value="12" className="signup__option-day">13</option>
                        <option value="12" className="signup__option-day">14</option>
                        <option value="12" className="signup__option-day">15</option>
                        <option value="12" className="signup__option-day">16</option>
                        <option value="12" className="signup__option-day">17</option>
                        <option value="12" className="signup__option-day">17</option>
                        <option value="12" className="signup__option-day">19</option>
                        <option value="12" className="signup__option-day">20</option>
                        <option value="12" className="signup__option-day">21</option>
                        <option value="12" className="signup__option-day">22</option>
                        <option value="12" className="signup__option-day">23</option>
                        <option value="12" className="signup__option-day">24</option>
                        <option value="12" className="signup__option-day">25</option>
                        <option value="12" className="signup__option-day">26</option>
                        <option value="12" className="signup__option-day">27</option>
                        <option value="12" className="signup__option-day">28</option>
                        <option value="12" className="signup__option-day">29</option>
                        <option value="12" className="signup__option-day">30</option>
                        <option value="12" className="signup__option-day">31</option>
                    </select>

                    <select  className="signup__select-year">
                        <option value="Year" className="signup__option-year">Year</option> 
                        <option value="2000" className="signup__option-year">2000</option>
                        <option value="2001" className="signup__option-year">2001</option>
                        <option value="2002" className="signup__option-year">2002</option>
                        <option value="2003" className="signup__option-year">2003</option>
                        <option value="2004" className="signup__option-year">2004</option>
                        <option value="2005" className="signup__option-year">2005</option>
                        <option value="2006" className="signup__option-year">2006</option>
                        <option value="2007" className="signup__option-year">August</option>
                        <option value="2008" className="signup__option-year">2008</option>
                        <option value="2009" className="signup__option-year">2009</option>
                        <option value="2010" className="signup__option-year">2010</option>
                        <option value="2011" className="signup__option-year">2011</option>
                    </select>
                </form>
                <button className="login__enterin--home-page" onClick={e => setToken("ok")}>Next</button>
                 
            </div>
        </div>
    )
}

export default Signup