import axios from 'axios'
import { useEffect, useState } from "react"
import ShowCard from "../ui/ShowCard"
import Loader from '../dynamics/Loader'
import "./BestDeal.css"



function Deals({ heading, filter}){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoding] = useState(false);
    const [error, setError] = useState(undefined);


    useEffect( () => {
        async function fetch(){
            setIsLoding(true)
            try {
                const Regfilter = {
                    special_search_tag: { $regex: filter},
                }
                const URL = import.meta.env.VITE_SERVER_URL;
                const selection = "image_urls.main _id location price price_type features.type _id features.bed features.area features.bathroom";
                const response = await axios.post( URL + "database/properties", {schema: "properties", filter: Regfilter, selection});
                setData(response.data)       
                console.log("foo", response.data)
                setIsLoding(false)
            } catch (err) {                
                console.error("axios error",err);
                setTimeout( () => setIsLoding(false), 1000)             
                setError(err);
            }
        }  
        fetch()
    }, [])

    
    return ( <>
            <div className={`shows ${isLoading || error || data.length === 0? "nogrid": null}`}>
                <h2>{heading}</h2>
                { error && <Error />}
                { isLoading && <Loader />}
                { (data.length == 0 || data.length == undefined)  && !isLoading && !error && <p style={{padding: "10%"}}>Mmm. looks like there is no data.</p>}
                { data && data.length && <div className="show-items"> 
                    {data.map( (d) => {
                        return <ShowCard 
                            key={d._id} 
                            _id={d._id} 
                            name={d.features.type} 
                            price={d.price} 
                            location={d.location} 
                            type={d.price_type} 
                            img={d.image_urls.main}
                            bathroom={d.features.bathroom}
                            area={d.features.area}
                            bed={d.features.bed}
                            path={"properties"}
                            
                        />})
                    }        
                </div> 
                } 
            </div>
        </>
        )
}

export default Deals