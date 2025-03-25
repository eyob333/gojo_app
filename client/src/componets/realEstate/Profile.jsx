import { useState, useEffect } from "react"
import axios from "axios"
import { realestate} from "../../assets/data"
import Loader from "../dynamics/Loader"
import Error from "../dynamics/Error"
import ShowCard from "../ui/ShowCard"
import "./Profile.css"

function Profile(){
    const [da, setData] = useState([])
    const [isLoading, setIsLoding] = useState(false)
    const [error, setError] = useState(undefined);

    const filter = {
        "realEstate": 'foo'
    }

    useEffect( () => {
        async function fetch(){
            setIsLoding(true)
            try {
                const response = await axios.get("http://localhost:1424/realestate/profile", {schema: '', filter: filter});
                console.log(response);             
                setData(response.data)
                setIsLoding(false)
            } catch (err) {                
                console.error(err);
                setTimeout( () => setIsLoding(false), 1000)             
                setError(err)
            }
        }
        fetch()
    }, [fetch])
    
    const data = realestate[0]
    return <>
            <div className="realestate-profile">
                <div className="heading-profile">
                    <img className="heading-img" src={data.icons} alt="" />                
                    <h1>
                       {data.name} Real Estate
                    </h1>
                </div>

                <div className="profile-details">
                    <ul className="profile-detail">
                        <p>Total properties  {data.properties}</p>                    
                        <p>Total project  {data.project}</p>
                        <p>Site  {data.site}</p>
                        <p>Rating  {data.rating}</p>
                        <p>Website { data.website}</p>
                    </ul>
                </div>

                {!isLoading && error ? <Error 
                                            statusCode="400"
                                            message="Check your network"
                                         /> 
                                        : <div className="profile-properties">
                    <div className= { isLoading? `properites isloading`: `properites`} >
                        {isLoading? <Loader /> : da.map( d => {
                                return <ShowCard
                                            key={d.name} 
                                            name={d.name} 
                                            type={d.type}
                                            details={d.details}
                                            description={d.description}
                                            />
                            })}
                    </div>
                </div>}
            </div>
        </>
}

export default Profile