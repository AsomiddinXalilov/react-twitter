import Login from "./Login"
import { Routes, Route } from "react-router-dom";


function UnauthorizedApp(){
    return(
      <>
      <Login/>

      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
    )
  }
  export default UnauthorizedApp