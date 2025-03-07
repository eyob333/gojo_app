


function Input(props){
    return (
        <div className="input-item">
            <label htmlFor={props.name}><p>{props.name}</p></label>
            {props.root == "textarea" ? <textarea {...props} />: <input {...props} />}
              
        </div>
    )
}

export default Input