import "./App.scss";
import useToken from "./Hook/useToken"

//Pages
import UnauthorizedApp from "./Pages/Unauthurized";
import AuthorizedApp from "./Pages/AuthorizedApp";

function App() {

  const [token] = useToken()

  if(token){
    return  <AuthorizedApp/>
  }else{
    return <UnauthorizedApp/>
  }
}

export default App;
