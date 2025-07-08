import './css/ControlCard.css'

function ControlCards({project, realestate, bedroom, price, img}){

    return <>
        <div className="admin-control-cards-container" style={{backgroundImage:`URL(${img})`}}>
            <div className="admin-control-cards-headers">
                <div className='admin-control-cards-headers-heading'>
                    <h4>{project}</h4>
                    <h5>{realestate}</h5>
                </div>
                <div className='admin-control-cards-headers-icons-container'>
                    <div className='admin-control-cards-headers-icons'>
                        <svg className="control-icons-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#ffffff" strokeWidth="1.176" strokeLinecap="round" strokeLinejoin="round"></path> 
                                <path d="M21 21H12" stroke="#ffffff" strokeWidth="1.176" strokeLinecap="round" strokeLinejoin="round"></path> 
                            </g>
                        </svg>            
                    </div>
                    
                    <div className='admin-control-cards-headers-icons' >
                        <svg
                            className="control-icons-svg"
                            width="208px"
                            height="208px"
                            viewBox="0 -5 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            stroke="#ffffff"
                            // {...props}
                        >
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.064"></g>
                            <g>
                            <g strokeWidth="0.00032" fill="none" fillRule="evenodd">
                                <g transform="translate(-516, -1144)" fill="#ffffff">
                                <path d="M538.708,1151.28 C538.314,1150.89 537.676,1150.89 537.281,1151.28 L534.981,1153.58 L532.742,1151.34 C532.352,1150.95 531.718,1150.95 531.327,1151.34 C530.936,1151.73 530.936,1152.37 531.327,1152.76 L533.566,1154.99 L531.298,1157.26 C530.904,1157.65 530.904,1158.29 531.298,1158.69 C531.692,1159.08 532.331,1159.08 532.725,1158.69 L534.993,1156.42 L537.232,1158.66 C537.623,1159.05 538.257,1159.05 538.647,1158.66 C539.039,1158.27 539.039,1157.63 538.647,1157.24 L536.408,1155.01 L538.708,1152.71 C539.103,1152.31 539.103,1151.68 538.708,1151.28 Z M545.998,1162 C545.998,1163.1 545.102,1164 543.996,1164 L526.467,1164 L518.316,1154.98 L526.438,1146 L543.996,1146 C545.102,1146 545.998,1146.9 545.998,1148 L545.998,1162 Z M543.996,1144 L526.051,1144 C525.771,1143.98 525.485,1144.07 525.271,1144.28 L516.285,1154.22 C516.074,1154.43 515.983,1154.71 515.998,1154.98 C515.983,1155.26 516.074,1155.54 516.285,1155.75 L525.271,1165.69 C525.467,1165.88 525.723,1165.98 525.979,1165.98 L525.979,1166 L543.996,1166 C546.207,1166 548,1164.21 548,1162 L548,1148 C548,1145.79 546.207,1144 543.996,1144 Z" />
                                </g>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
                
            </div>
            <div className="admin-control-cards-content-info">
                <h4>{project}</h4>
                <h5>{realestate}</h5>
            </div>
        </div>
        </>
}

export default ControlCards