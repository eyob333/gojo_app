import axios from "axios"
import { useEffect, useState } from "react"
import "./pagesCss/properties.css"
import ShowCard from "../componets/ui/ShowCard"
import Error from "../componets/dynamics/Error"
import Loader from "../componets/dynamics/Loader"


function Properties(){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [resD, setResD] = useState(undefined);
    const [priceVal, setPriceVal] = useState(100);

    async function handleSubmit(){
        try{
            setLoading(true) 
            const filter = {
                location: data.location,
                "features.type": data.type,
                price_type: '/sq (m)'
            }   
            const selection = "image_urls.main _id description location price price_type features.type _id"
            const condition = priceVal
            const response = await axios.post("http://localhost:1424/database/properties", {schema: "properties", filter, selection, condition});
            console.log("Upload successful: ", response.data);
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
          [name]: value
        }));
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

        // move()
    return <> 
    <section id="properties">
        <div id="search">
            <div className="container">
                    <p className="heading">Find Your Dream Home Easily And Quickly Here</p>
                    <div className="search-box">
                        <div className="search-item">
                            <span className="label">Location</span>
                            <input type="text" name="location" className="value" placeholder="Bali, Indonesia" onChange={handeleDataChange} />  
                        </div>
                        <div className="search-item">
                            <span className="label">Type</span>
                            <select name="type" className="value"  onChange={handeleDataChange}>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Condo">Condo</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Single-family_home">Single-family home</option>
                                </select>
                        </div>
                        <div className="search-item">
                            <span className="label">Price Type</span>
                            <select name="price_type" className="value" onChange={handeleDataChange}> 
                                <option value="Fixed">Fixed</option>
                                <option value="Sqmt">Sqmt</option>
                            </select>
                        </div>
                        <button className="search-button" onClick={handleSubmit}>
                            <svg className="svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path fill ="#000000"  d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"/></svg>
                        </button>
                    </div>
            </div>
            <div className="slider">
                <div id="output" style={{marginLeft: `${priceVal}%`}} className="output">
                    { `>$${priceVal}`}
                </div>
                <input  type="range" min="0" max="100" value={priceVal} step="10" onChange={() => move()} id="range" />
            </div>
        </div>

        <div>
            {loading && <Loader />}
            {error && <Error />}
            {resD && resD.map( d => {
                return <ShowCard key={d._id} _id={d._id} name={d.features.type} price={d.price} description={d.description} details={d.description} type={d.price_type} img={d.image_urls.main} />
            })}
        </div>
        </section>
    </>
}

export default Properties