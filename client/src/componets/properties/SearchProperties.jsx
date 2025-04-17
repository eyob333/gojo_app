import { useState, useEffect } from "react"
import ShowCard from "../componets/ui/ShowCard"

function SearchProperties(data = undefined){
    const [data, setData] = useState(data);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)


    return <div className="search-properties">
            
    </div>
}

export default SearchProperties