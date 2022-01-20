import { useState } from "react";
import useToken from "./../Hook/useToken";

function Login() {
  const [token, setToken] = useToken();
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const hendleSubmit = (e) => {
    e.preventDefault()

    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: inputValue,
        password: inputValue1
      })
    })
    .then(res => res.json())
    .then(data => setToken(data.token))
  }

  return (
    <section className="telegram">
      <div className="telegram__container">
        <h1>Log In</h1>

        <form onSubmit={(e) => hendleSubmit(e)}>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setInputValue1(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default Login;
