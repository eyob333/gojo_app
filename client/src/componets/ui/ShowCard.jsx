import { Link } from "react-router-dom"
import "./ShowCard.css"
function ShowCard({name, price = 400, type = "/sqm", description, img, _id, path = undefined, bed = 1, bathroom = 1, area = 148, location}){
    return (<Link to={path? `${path}/${_id}`:_id} >
                <div className="show-item">
                    <div className="show-item-img-container">
                        <img src={img} alt={"Thumbnail of properties"} />
                    </div>
                    <div className="details">                    
                        <h3> {name} </h3>
                        <div className="show-item-price-container">
                            <h4>${price}</h4> 
                            <p>{type}</p>                           
                        </div>

                        <div className="show-item-details-container">
                            <div className="show-item-detail-icons">
                                <div className="show-item-detail-icons-item">
                                    <p>{bed} bed</p>
                                    <svg className="show-item-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <path d="M2 2H0V14H2V12H14V14H16V9C16 7.34315 14.6569 6 13 6H6C6 4.89543 5.10457 4 4 4H2V2Z" fill="#ffffff"></path> 
                                            </g>
                                    </svg>

                                </div>                                
                                <div className="show-item-detail-icons-item">
                                    <p>{bathroom} Bathroom</p>
                                    <svg className="properties-icon"  fill="#ffffff" viewBox="0 0 512 512" id="Layer_1" enableBackground="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <g> 
                                                <path d="m496 288c-38.154 0-437.487 0-448 0v-56h32c8.837 0 16-7.164 16-16v-40c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-16v-138.745c0-25.903 31.562-39.064 49.941-20.686l16.94 16.94c-13.424 23.401-10.164 53.835 9.805 73.805l8 8c6.247 6.248 16.379 6.249 22.627 0l64-64c6.249-6.248 6.249-16.379 0-22.627l-8-8c-20.35-20.351-50.837-23.06-73.817-9.817l-16.928-16.928c-11.57-11.57-26.952-17.942-43.313-17.942-33.776 0-61.255 27.479-61.255 61.255v226.745c-8.837 0-16 7.164-16 16s7.163 16 16 16v32c0 43.889 19.742 83.247 50.806 109.681l-22.338 23.229c-9.803 10.193-2.445 27.09 11.53 27.09 4.199 0 8.394-1.644 11.534-4.91l26.218-27.263c19.844 10.326 42.376 16.173 66.25 16.173h192c23.874 0 46.406-5.847 66.25-16.173l26.218 27.263c6.106 6.35 16.234 6.585 22.623.442 6.369-6.125 6.566-16.254.441-22.623l-22.338-23.229c31.064-26.433 50.806-65.791 50.806-109.68v-32c8.837 0 16-7.164 16-16s-7.163-16-16-16zm-310.89-223.738-40.845 40.845c-8.246-11.427-7.23-27.515 3.048-37.794 10.378-10.377 26.461-11.259 37.797-3.051zm278.89 287.738c0 61.757-50.243 112-112 112h-192c-61.757 0-112-50.243-112-112v-32h416z"></path> 
                                            </g> 
                                        </g>
                                    </svg>
                                </div>
                                <div className="show-item-detail-icons-item">
                                    <p>{area} sqft</p>
                                    <svg className="show-item-icon"  viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#242323">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.9120000000000001"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M6 6L3 3V21H21L18 18M6 6L9 9M6 6L5 7M9 9L12 12M9 9L8 10M12 12L15 15M12 12L11 13M15 15L14 16M15 15L18 18M18 18L17 19M6 12V18H12L6 12Z" stroke="#ffffff" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></path> 
                                            </g>
                                    </svg>
                                </div>

                            </div>
                            <p>{description}</p>
                            <p>{location}</p>                          
                        </div>
                     
                    </div>
                </div>
            </Link>)             

}

export default ShowCard