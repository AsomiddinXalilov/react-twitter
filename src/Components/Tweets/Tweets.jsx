import data from "./data"
import { useNavigate } from 'react-router-dom';


function Tweets({username, last}){
  const history = useNavigate();


    return(
      <>
      <h1>Tweets...</h1>
      <ul>
        {
          (username ? data.filter(i => i.userName === username) : data).map(i => {
            return (
              <li key={i.id}>{i.tweet}</li>
            )
          })
        }
      </ul>

      <button onClick={e => history("/")}>GO HOME</button>
    </>  
    )
  }
  export default Tweets