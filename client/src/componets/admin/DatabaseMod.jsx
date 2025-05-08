import { useState } from "react"
import View from "./Dmods/View"
import FileUpload from "./Dmods/Upload"
import UploadProperties from "./Dmods/UploadProperties"

import "./styles/DatabaseMod.css"


function DatabaseMod({collection = null}){
    const [selection, setSelection] = useState("view")

    function handleSelection(arg){
        setSelection(arg)
    }

    return <>
        <div className="database-icons-div">
            <div className={`database-icons ${selection === 'add' && 'active'}`} onClick={()=>{ handleSelection('add') }}>
                <svg className="database-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" strokeWidth="1.248" strokeLinecap="round"></path> 
                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#ffffff" strokeWidth="1.248" strokeLinecap="round"></path> 
                    </g>
                </svg>
            </div>
            <div className={`database-icons ${selection === 'view' && 'active'}`} onClick={()=>{ handleSelection('view') }} >
                <svg className="database-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="13.312000000000001">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill="#ffffff" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"></path>
                    </g>
                </svg>
            </div>
            <div className={`database-icons ${selection === 'edit' && 'active'}`} onClick={()=>{ handleSelection('edit') }} >
                <svg className="database-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#ffffff" strokeWidth="1.176" strokeLinecap="round" strokeLinejoin="round"></path> 
                        <path d="M21 21H12" stroke="#ffffff" strokeWidth="1.176" strokeLinecap="round" strokeLinejoin="round"></path> 
                    </g>
                </svg>            
            </div>    
        </div>
        <div className="database-cont">
            {selection === "view" && <View collection={collection} />}
            {selection === "add" && collection === "properties" && <UploadProperties />}
            {selection === "add" && collection === "realestates" && <FileUpload />}
            {selection === "add" && collection === "users" && <p style={{margin: "100px 250px", color:"white" }} > hey u cant add users. duhhh</p>}
            {selection === "add" && collection === "admins" && <p style={{margin: "100px 250px", color:"white" }}> hey u cant add admins. duhhh</p>}
        </div>
    </>
}


export default DatabaseMod