import { useState } from "react"
import Button from "../ui/button"
import FileUpload from "./Upload"
import './AdminHome.css'
import NotAvaliable from "../dynamics/NotAvaliable"
import Database from "./Database"
import UploadProperties from "./UploadProperties"

function AdminHome({admin = 'admin'}){
    const [render, setrender] = useState('')

    function handleClick(id){
        setrender(id)
    }

    return <>
        <div className="admin-heading">
            <h2>welcome back {admin}</h2>            
        </div>

        <div className="admin-nav">
            <div className="admin-option">
                <Button className="admin-option-btn" disabled={render ==='analytics' && true} onClick={() => handleClick('analytics')} 
                    ><h4>Analytics</h4></Button>
                <Button className="admin-option-btn" disabled={render ==='database' && true}  onClick={() => handleClick('database')} >
                    <h4>Database</h4></Button>
                <Button className="admin-option-btn" disabled={render ==='issues' && true} onClick={() => handleClick('issues')} >
                    <h4>Issues</h4></Button>
                <Button className="admin-option-btn" disabled={render ==='clients' && true} onClick={() => handleClick('clients')} >
                    <h4>Clients</h4></Button>              
            </div>
            <div className="admin-option-details">
                { render === 'database' &&  <Database />}
                { render === 'analytics' && <NotAvaliable />}
                { render === 'clients' && <NotAvaliable />}
                { render === 'issues' && <NotAvaliable />}

            </div>
          
        </div>
    </>
}


export default AdminHome