import './App.scss';
import { Routes, Route} from "react-router-dom";

//Components
import Header from "./Components/Header/Header";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Users from './Pages/Users';
import Signup from './Pages/SigUp';

//Routes
import Public from './Routes/Public';
import Private from './Routes/Private';



function App() {
  return (
    <>
      <Header />
        <Routes>
              <Route element={<Public />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sigup" element={<Signup />}/>
          </Route>

          <Route element={<Private />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="*" element={<h1>Page not found 404 :(</h1>}/>
        </Routes>
    </>
  );
};

export default App;
