import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../ui/button"
import Loader from "../dynamics/Loader";
import Error from "../dynamics/Error";
import DatabaseMod from "./DatabaseMod";
import "./styles/Database.css"

function Database(){

  const [data, setData] = useState(null); // State to store the response data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any errors
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    // Define the API call
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1424/admin/database", {
          maxRedirects: 5, // Axios automatically follows redirects
        });
        setData(response.data); // Set the response data
      } catch (err) {
        setError(err); // Set the error if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchData(); // Call the function

  }, []); // Empty dependency array ensures this runs only once on mount

  function handleSelect(name){
    setSelection(name);
  }
    console.log(selection)


    return <>
            <div className="database">
                <div className="databae-headers">
                    {error && <Error/>}
                    {loading && <Loader className={'database'} />}
                    {data && data.map( d=> <Button key={d.name} onClick={() => handleSelect(d.name)}><h4>{d.name}</h4></Button>) }
                       
                    {/* <Button><h4>properties</h4></Button> 
                    <Button><h4>realestate</h4></Button>  */}
                    {/* {loading && <p>loading..</p>}   
                    {data && <code>{data}</code>} */}
                </div>
                <div className="database-mod">
                    {selection && <DatabaseMod />}
                </div>

            </div>
        </>
}

export default Database