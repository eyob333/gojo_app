import axios from "axios"
import { useEffect, useState } from "react"
import "./pagesCss/properties.css"
import ShowCard from "../componets/ui/ShowCard"
import Error from "../componets/dynamics/Error";
import Loader from "../componets/dynamics/Loader";
import { Link } from "react-router-dom";

const URL = import.meta.env.VITE_SERVER_URL;


function Properties(){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [resD, setResD] = useState(undefined);
    const [priceVal, setPriceVal] = useState(100);

    async function handleSubmit(){
        try{
            setLoading(true) 
            const filter = {
                location: data.location,
                "features.type": data.type,
                price_type: data.price_type,
            }   
            const selection = "image_urls.main _id location price price_type features.type _id"
            const condition = priceVal * 1000
            const response = await axios.post( URL + "database/properties", {schema: "properties", filter, selection, condition});
            console.log("response data", response.data);
            setResD(response.data)
            setLoading(false)
        }
        catch (err){
            setLoading(false)
            setError(err);
            console.log(err)
        }
    }

    function handeleDataChange(event){
        const { name, value } = event.target
        setData(prevState => ({
          ...prevState,
          [name]: value == "All" ||  value == "Any Where" ? undefined: value
        }));
        console.log("yoo", data);
    }

    useEffect( () => {
        window.addEventListener("keypress", (e) => {
            if (e.key == "Enter"){
                handleSubmit();
            }
        })

    },[])

    function move(){
        setPriceVal(document.getElementById("range").value);        
    }

    return <> 
    <section id="properties">
        <div id="search" className={`${error || loading? "nogrid" : undefined}`}>
            <div className="properties-container">
                    <p className="heading">Find Your Dream Home Easily And Quickly Here</p>
                    <div className="search-box">
                        <div className="search-item">
                            <span className="label">Location</span>
                            <input type="text" name="location" className="value" placeholder="piassa, Addis Ababa" onChange={handeleDataChange} defaultValue={"Any Where"} />  
                        </div>
                        <div className="search-item">
                            <span className="label">Type</span>
                            <select name="type" className="value" defaultValue={"All"}  onChange={handeleDataChange}>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Condo">Condo</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Single-family_home">Single-family home</option>
                                    <option value="All">All</option>
                                </select>
                        </div>
                        <div className="search-item">
                            <span className="label" >Price Type</span>
                            <select name="price_type" className="value" onChange={handeleDataChange}> 
                                <option value="Fixed">Fixed</option>
                                <option value="Sqm">Sqm</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <button className="search-button" onClick={handleSubmit}>
                            <svg className="svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path fill ="#000000"  d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"/></svg>
                        </button>
                    </div>
            </div>
            <div className="slider">
                <div id="output" style={{marginLeft: `${priceVal/2}%`}} className="output">
                   <p>{ `$${priceVal}`}</p> 
                </div>
                <input  type="range" min="0" max="200" value={priceVal} step="1" onChange={() => move()} id="range" />
            </div>
        </div>
        

        <div className={`properties-search-result ${error || loading? "serch-result-nogrid" : undefined} ${ resD && resD.length ==0 ? "serch-result-nogrid" : undefined}`}>
            {loading && <Loader />}
            {error && <Error />}
            {resD && resD.length == 0 && <> <p  style={{ display: "block",textAlign: "center", paddingTop: "20px"}}>mmm.... looks like there is no properties for this realestae</p>
                            <p style={{ cursor: "pointer", paddingTop: "14px" ,textAlign: "center", color: "lightgreen"}} onClick={handleSubmit}>Refresh</p>
                         </>}
            {resD && resD.length && resD.map( d => {
                return <ShowCard key={d._id} _id={d._id} name={d.features.type} price={d.price} location={d.location} type={d.price_type} img={d.image_urls.main} />
            })}
        </div>
    </section>
    </>
}

export default Properties