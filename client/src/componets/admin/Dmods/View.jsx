import axios from "axios";
import { useState, useEffect } from "react";
import './View.css'

function View({collection}){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(collection)

  useEffect(() => {
        // Define the API call
    const fetchData = async () => {
      try {
            setLoading(true)
            const response = await axios.post("http://localhost:1424/admin/database", {schema: collection, filter: {}});
            setData(response.data); // Set the response data
      } catch (err) {
            setError(err); // Set the error if something goes wrong
      } finally {
            setLoading(false); // Set loading to false after the request completes
          }
      };
  
        fetchData(); // Call the function
    
      }, [collection]); // Empty dependency array ensures this runs only once on mount

      console.log(data)
    return <pre className="database-view-pre">
            <code className="database-view-code">
                {loading && <p style={{margin: "10px 250px", color:"white" }}  >loading</p>}
                {error && "error"}
                {/* {data && data.map(d => JSON.stringify(d).replace(/[\\n\\t\\r]/g, <br></br>))} */}
                {data && data.map(d => `${JSON.stringify(d, null, 4)}`)}
            </code>    
        </pre>
}

export default View