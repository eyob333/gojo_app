import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../ui/Button";
import Loader from "../dynamics/Loader";
import Error from "../dynamics/Error";
import DatabaseMod from "./DatabaseMod";
import "./styles/Database.css"

function Database(){

  const [data, setData] = useState(null); // State to store the response data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any errors
  const [selection, setSelection] = useState("properties");

  useEffect(() => {
    // Define the API call
    const fetchData = async () => {
      try {
        const URL = import.meta.env.VITE_SERVER_URL;
        const response = await axios.get(URL + "admin/collection", {
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
                    {loading && <Loader className='admin-page' />}
                    {data && data.map( d=> <Button key={d.name} className={`${selection === d.name && 'dbactive'}`} onClick={() => handleSelect(d.name)}><h4>{d.name}</h4></Button>) }
                       
                </div>
                <div className="database-mod">
                    {selection && !loading && <DatabaseMod collection={selection} />}
                </div>
            </div>
        </>
}

export default Database