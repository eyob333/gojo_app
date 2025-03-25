import './dynamics-styles/Error.css'
function Error({
    style= "defalut",
    title = "Oops! It seems like this property moved out.",
    statusCode = "404",
    message = "he page you're looking for might be under construction, temporarily unavailable, or doesn't exist."
    }){
    return <>
        <div className={`error-container ${style}`}>
                <div className="error-code">
                    <i className="fas fa-house-crack"></i> {statusCode}
                </div>
                <div className="error-message">
                    <p>{title}</p>
                </div>
                <div className="error-message-sub">
                    <p>{message}</p>
                </div>
                {/* <a href="/" className="return-button">Go Back Home</a> */}
         </div>    
    </>
} 

export default Error

