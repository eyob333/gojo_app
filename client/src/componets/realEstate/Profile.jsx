import { useState, useEffect } from "react"
import axios from "axios"
import { useRouteLoaderData } from "react-router"
import { realestate} from "../../assets/data"
import Loader from "../dynamics/Loader"
import Error from "../dynamics/Error"
import ShowCard from "../ui/ShowCard"
import "./Profile.css"

function Profile(){
    const [da, setData] = useState([])
    const [isLoading, setIsLoding] = useState(false)
    const [error, setError] = useState(undefined);
    const roData = useRouteLoaderData('realestate')


    useEffect( () => {
        async function fetch(){
            setIsLoding(true)
            try {

                const filter = {
                        realestate: roData.name,
                    }   
                const selection = "image_urls.main _id description location price price_type features.type"
                const response = await axios.post("http://localhost:1424/database/properties", {schema: "properties", filter, selection});
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
                    <img className="heading-img" src={roData.icons} alt="Reale-state logo" />                
                    <h1>
                       {roData.name} Real Estate
                    </h1>
                </div>

                <div className="profile-details">
                    <ul className="profile-detail">
                        <p>Total properties  {roData.properties}</p>                    
                        <p>Total project  {roData.project.project_total}</p>
                        <p>Site  {roData.project.site}</p>
                        <p>Rating  {roData.rating}</p>
                        <p>Website {roData.website}</p>
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
                                            key={d._id} 
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

async function realestateFetch({request, params}){
    try{
        const response = await axios.post("http://localhost:1424/database/realestate",{filter: {name: params.name },selection: "", quantity: 1})         
        console.log(response.data)
        return response.data
    }
    catch (err){
        throw new Response(JSON.stringify({message: "could not fetch"}), {status: 500})
    }
    
}

export default Profile
export {realestateFetch}