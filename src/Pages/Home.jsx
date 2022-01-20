import Tweets from "../Components/Tweets/Tweets"
import {NavLink} from "react-router-dom"
import data from "../Components/Tweets/data";

function Home(){

  console.log(data)

  return(
    <>
    <h1>Home</h1>

    {
      data.map(i => {
        return(
          <li key={i.id}>
            <NavLink to={`/profile/${i.userName}`}>{i.userName}</NavLink>
          </li>
        ) 
      })
    }
    <Tweets />

  </>  
  )
}
export default Home