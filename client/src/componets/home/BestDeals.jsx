import ShowCard from "../ui/ShowCard"
import { deals } from "../../assets/data"

function BestDeals({ heading, details, filter}){

    return ( <>
        <div className="shows">
            <h2>{heading}</h2>
            <p>{filter} </p>

            <div className="show-items"> 
                {deals.map( (d) => {
                    return <ShowCard 
                        key={d.name} 
                        name={d.name} 
                        type={d.type}
                        details={d.details}
                        description={d.description}
                        img={d.img}
                        />})
                }        
            </div>
        </div>
        </>
        )
}

export default BestDeals