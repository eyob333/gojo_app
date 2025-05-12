import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteLoaderData} from "react-router";
import Loader from "../dynamics/Loader";
import Error from "../dynamics/Error";
import ShowCard from "../ui/ShowCard";
import "./Profile.css";


function Profile(){
    const [da, setData] = useState(undefined);
    const [isLoading, setIsLoding] = useState(false);
    const [error, setError] = useState(undefined);
    const roData = useRouteLoaderData('realestate');

    useEffect( () => {
        async function fetch(){
            try {
                setIsLoding(true)
                const filter = {
                        realEstate: roData.name
                    }
                console.log(filter)
                const URL = import.meta.env.VITE_SERVER_URL;
                const selection = "image_urls.main _id location price price_type features.type features.bed features.area features.bathroom"
                const response = await axios.post( URL + "database/properties", {schema: "properties", filter, selection});
                console.log(response)
                setData(response.data)
                setIsLoding(false)
            } catch (err) {                
                console.error(err);
                setIsLoding(false)        
                setError(err)
            }
        }
        fetch();
    }, [])
    
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
                        <div>
                            <p>Total properties </p> 
                            <p style={{color: "lightblue"}}>{roData.properties? roData.properties: "----"}</p>   
                        </div>

                        <div>
                            <p>Total project </p>
                             <p style={{color: "lightblue"}}>{roData.project.project_total ? roData.project.project_total: "----"}</p>
                        </div>

                        <div>
                            <p>Site </p> 
                            <p style={{color: "lightblue"}}>{roData.project.site? roData.project.site: "----"}</p>
                        </div>  

                        <div>
                            <p>Rating </p> 
                            <p style={{color: "lightblue"}}>{roData.rating? roData.rating: "----"}</p>
                        </div>              
                        
                        <div>
                            <p>Website </p> 
                            <a style={{color: "lightblue"}} href={roData.website} >{roData.website ? roData.website: "----"}</a>
                        </div> 

                        <div>
                            <p>Head Office </p> 
                            <p style={{color: "lightblue"}}>{roData.head_office ? roData.head_office: "----"}</p>  
                        </div>    
                              

                    </ul>
                </div>

                <div className={`profile-properties-response ${error || isLoading|| da.length == 0 ? 'nogrid' : undefined}`} >



                {error && <Error 
                               statusCode="400"
                                message="Check your network" 
                                /> 
                }


                {isLoading && <Loader />} 

                { da && da.map( d =>  <ShowCard
                                            key={d._id}
                                            _id={d._id} 
                                            name={d.name} 
                                            type={d.type}
                                            location={d.location}
                                            img={d.image_urls.main}
                                            bed={d.features.bed}
                                            area={d.features.area}
                                            bathroom={d.features.bathroom}
                                            path={"properties"}
                                        />
                                    )
                }
            
                { da &&  da.length == 0 && <>
                             <p style={{textAlign: "center", paddingTop: "20px"}}>mmm.... looks like there is no properties for this realestae</p>
                            <Link to={".."}><p style={{textAlign: "center", color: "lightgreen"}}>Go Back</p></Link>
                         </>}
                </div>
            </div>
        </>
}

export const realestateFetch = async ({ params }) => {
    try{
        const URL = import.meta.env.VITE_SERVER_URL;
        const response = await axios.post(URL + "database/realestate",{filter: {name: params.name },selection: "", quantity: 1})         
        return response.data
    }
    catch (err){
        throw new Response(JSON.stringify({message: "could not fetch"}), {status: 500})
    }
    
}

export default Profile