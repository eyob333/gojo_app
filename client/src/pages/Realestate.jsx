import { useEffect, useState } from "react"
import axios from 'axios'
import Loader from "../componets/dynamics/Loader"
import Error from "../componets/dynamics/Error"
import ProfileCards from "../componets/realEstate/ProfileCards"
import './pagesCss/realestate.css'


function Realestate(){
    const [data, setData] = useState([])
    const [isLoading, setIsLoding] = useState(false)
    const [error, setError] = useState(undefined);


    useEffect( () => {
        async function fetch(){
            setIsLoding(true)
            try {
                const URL = import.meta.env.VITE_SERVER_URL;
                const response = await axios.post( URL + "database/realestate",{filter: {}, selection: "id name icons image_url", quantity: 2});
                console.log(response);             
                setData(response.data)
                setIsLoding(false)
            } catch (err) {                
                console.error(err);
                setError(err)
                setTimeout( () => setIsLoding(false), 4000)
            }
        }
        fetch()

    }, [fetch])
    
    if(!isLoading && error){ 
        return <div className="err-load" ><Error style="null" /></div>
    }
    
    return (  <>
            <div className="realstae-home">
                <h2 className="realestate-list-heading">RealEstates</h2>
                <div className="realestae-body">
                    { isLoading? <div className="err-load" > <Loader /></div>: data.map( d => {
                            return <ProfileCards key={d._id} name={d.name} icon={d.image_url} />
                    })}
                </div>
            </div>
    </>)
}


export default Realestate