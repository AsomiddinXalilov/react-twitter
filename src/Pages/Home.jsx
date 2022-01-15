import useAuth from "../Hook/useAuth"

function Home() {

    const [token, setToken] = useAuth()

    return(
        <div className="hom">

            <button
                title="Double click on button !"
                onDoubleClick={() => setToken(null)}
            >LogOut</button>
        </div>
    )
}

export default Home