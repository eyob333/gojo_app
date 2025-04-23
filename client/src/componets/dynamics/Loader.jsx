import './dynamics-styles/Loader.css'

function Loader({className = null}){
    return <>
        <div className={`loading-container ${className}` } >
                <div className="location-pin"></div>
                <div className="searching-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
                <p>Finding Your Ideal property...</p>
            </div>
    </>
}
    
export default Loader

