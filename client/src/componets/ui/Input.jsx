function Input(props){
    return (
        <div className={`input-item ${props.Element && props.Element}`}>
            {   props.Element 
                && props.Element === "select"
                && <>
                        <label class Name={props.lname} htmlFor={props.name}>
                            <p>{props.name}</p>
                        </label>
                        <select name={props.name} id={props.id} onChange={props.onChange} >
                            {props.selectioinOptions.map( d => 
                                    <option value={d.option}>{d.option}</option>
                            )}
                        </select> 
                    </>
            }
            { !props.Element 
                && <> 
                        <label class Name={props.lname} htmlFor={props.name}>
                            <p>{props.name}</p>
                        </label>
                        { props.root == "textarea" ? 
                            <textarea {...props} />:
                            <input {...props} />
                        }
                    </>
            }  
        </div>
    )
}

export default Input