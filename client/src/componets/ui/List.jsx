
function List({id, icon, name}){

    return (
        <div className="listitems">
            <img src={icon} alt="" />
            <h3>{name}</h3>
            <p>{id}</p>
            
        </div>
    )
}

export default List