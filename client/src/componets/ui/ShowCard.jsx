

function ShowCard({name, price, type, details, description, img}){
    return (<div className="show-item">
            <img src={img} alt={details} />
            <div className="details">                    
                <h3> {name} </h3>
                <h4>${price} {type}</h4>
                <p>{description}</p>
                <p>{details}</p>                     
            </div>
            </div>)             

}

export default ShowCard