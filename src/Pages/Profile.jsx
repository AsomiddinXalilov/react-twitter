
import {useParams } from "react-router-dom";

import Tweets from "../Components/Tweets/Tweets"

function Profile(){

  const {username} = useParams()

  
    return(
      <>
      <h1>Profile</h1>
      <Tweets username={username}/>
    </>  
    )
  }
  export default Profile