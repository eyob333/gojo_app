import "./dynamics-styles/HydrateFallback.css"

export default function HydrateFallback(){

    return <>
        <div className="fallback-container" 
            style={{ 
                    display: "grid", 
                    alignItems: "center", 
                    justifyContent: "center",
                    marginTop: "100px",
                    // padding: "50px",
                    paddingTop:"0"
                }}>
            <div className="fallbafck-home-top">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="#68ed92">
                        </path>
                    </g>
                </svg>  
            </div>
            <div className="fallback-colons">
                <svg className="svg-colon-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <g id="Interface / Line_Xl"> 
                            <path id="Vector" d="M12 21V3" stroke="#68ed92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g> 
                    </g>
                </svg>

                <svg className="svg-colon-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <g id="Interface / Line_Xl"> 
                            <path id="Vector" d="M12 21V3" stroke="#68ed92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g> 
                    </g>
                </svg>
            </div>
            <div className="fallback-loader-container">
                <div className="fallback-loader">
                </div>
            </div>
            
        </div>
    </>
}

