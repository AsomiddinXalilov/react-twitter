import Home from "./Home"
import Profile from "./Profile"
import { Routes, Route } from "react-router-dom";


function AuthorizedApp(){
  return(
    <>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
    </Routes>
  </>  
  )
}
export default AuthorizedApp