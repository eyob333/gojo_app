import { useEffect, useState } from "react"
import axios from 'axios'
import List from "../componets/ui/List"
import Loader from "../componets/dynamics/Loader"
import Error from "../componets/dynamics/Error"
import './pagesCss/realestate.css'


function Realestate(){
    const [data, setData] = useState([])
    const [isLoading, setIsLoding] = useState(false)
    const [error, setError] = useState(undefined);

    function handleClick(){
        console.log("hi")
    }

    useEffect( () => {
        async function fetch(){
            setIsLoding(true)
            try {
                const URL = import.meta.env.VITE_SERVER_URL;
                const response = await axios.post( URL + "database/realestate",{filter: {}, selection: "id name icons", quantity: 2});
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
                <h2 className="realestate-list-heading">Top RealEstates</h2>
                <div className="realestae-body">

                { isLoading? <div className="err-load" > <Loader /></div>: data.map( d => {
                        return <List key={d._id} id={d._id} name={d.name} icon={d.icons} onClick={handleClick} />
                })}
                </div>
            </div>

    </>)
}


export default Realestate