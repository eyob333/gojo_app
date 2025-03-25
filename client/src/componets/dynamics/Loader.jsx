import './dynamics-styles/Loader.css'

function Loader({className = null}){
    return <>
        <div className={`loading-container ${className}` } >
                <div class="location-pin"></div>
                <div class="searching-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
                <p>Finding Your Ideal property...</p>
            </div>
    </>
}
    
export default Loader

