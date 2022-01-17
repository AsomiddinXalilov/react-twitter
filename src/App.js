import './App.scss';
import { Routes, Route} from "react-router-dom";

//Components
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Users from './Components/Pages/Users';
import Signup from './Components/Pages/SigUp';

//Routes
import Public from './Routes/Public';
import Private from './Routes/Private';



function App() {
  return (
    <div className='homepage'>
        <Routes>
              <Route element={<Public />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />}/>
          </Route>

          <Route element={<Private />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="*" element={<div className='notfound'>Page not found 404 :(</div>}/>
        </Routes>
    </div>
  );
};

export default App;
