import { Link } from "react-router-dom"

function List({id, icon, name}){

    return (
        <Link to={name} >
            <div className="listitems">
                <img src={icon} alt="Real e-state logo" />
                <h3>{name}</h3>
                <p>{id}</p>
            </div>
        </Link>
    )
}

export default List