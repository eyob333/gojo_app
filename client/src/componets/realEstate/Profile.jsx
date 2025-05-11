import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteLoaderData} from "react-router";
import Loader from "../dynamics/Loader";
import Error from "../dynamics/Error";
import ShowCard from "../ui/ShowCard";
import "./Profile.css";


function Profile(){
    const [da, setData] = useState([]);
    const [isLoading, setIsLoding] = useState(false);
    const [error, setError] = useState(undefined);
    const roData = useRouteLoaderData('realestate');


    useEffect( () => {
        async function fetch(){
            setIsLoding(true)
            try {

                const filter = {
                        realestate: roData.name,
                    }
                const URL = import.meta.env.VITE_SERVER_URL;
                const selection = "image_urls.main _id description location price price_type features.type"
                const response = await axios.post( URL + "database/properties", {schema: "properties", filter, selection});
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
                        <p>Total properties  {roData.properties? roData.properties: "----"}</p>                    
                        <p>Total project  {roData.project.project_total ? roData.project.project_total: "----"}</p>
                        <p>Site  {roData.project.site? roData.project.site: "----"}</p>
                        <p>Rating  {roData.rating? roData.rating: "----"}</p>
                        <p>Website {roData.website ? roData.website: "----"}</p>
                        <p>Head Office {roData.head_office ? roData.head_office: "----"}</p>
                    </ul>
                </div>

                {!isLoading && error ? <Error 
                                            statusCode="400"
                                            message="Check your network"
                                         /> 
                                        : <div className="profile-properties">
                    <div className= { isLoading || da.length == 0? `properites isloading`: `properites`} >
                        {da.length == 0 && <>
                            <p  style={{textAlign: "center", paddingTop: "20px"}}>mmm.... looks like there is no properties for this realestae</p>
                            <Link to={".."}><p style={{textAlign: "center", color: "lightgreen"}}>Go Back</p></Link>
                         </>}
                        {isLoading ? <Loader /> : da.map( d => {
                                if( console.log(d)){
                                    return <>looks like there is no properties for this realestate</>
                                } else{
                                    return <ShowCard
                                            key={d._id} 
                                            name={d.name} 
                                            type={d.type}
                                            details={d.details}
                                            description={d.description}
                                            path={"properties"}
                                        />
                                }
                                
                            })}
                    </div>
                </div>}
            </div>
        </>
}

export const realestateFetch = async ({ params }) => {
    try{
        const URL = import.meta.env.VITE_SERVER_URL;
        const response = await axios.post(URL + "database/realestate",{filter: {name: params.name },selection: "", quantity: 1})         
        console.log(response.data)
        return response.data
    }
    catch (err){
        throw new Response(JSON.stringify({message: "could not fetch"}), {status: 500})
    }
    
}

export default Profile