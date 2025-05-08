import { useState } from "react"
import Button from "../ui/button"
import './AdminHome.css'
import NotAvaliable from "../dynamics/NotAvaliable"
import Database from "./Database"

function AdminHome({admin = 'admin'}){
    const [render, setrender] = useState('analytics')

    function handleClick(id){
        setrender(id)
    }

    return <>
        <div className="admin-heading">
            <h2>welcome back {admin}</h2>            
        </div>

        <div className="admin-nav">
            <div className="admin-option">
                <Button className={`admin-option-btn ${render ==='dashboard' && 'active'}`} disabled={render ==='dashboard' && true} onClick={() => handleClick('dashboard')} 
                    ><h4>Dashboard</h4></Button>
                <Button className={`admin-option-btn ${render ==='analytics' && 'active'}`} disabled={render ==='analytics' && true} onClick={() => handleClick('analytics')} 
                    ><h4>Analytics</h4></Button>
                <Button className={`admin-option-btn ${render ==='database' && 'active'}`} disabled={render ==='database' && true}  onClick={() => handleClick('database')} >
                    <h4>Database</h4></Button>
                <Button className={`admin-option-btn ${render ==='issues' && 'active'}`} disabled={render ==='issues' && true} onClick={() => handleClick('issues')} >
                    <h4>Issues</h4></Button>
                <Button className={`admin-option-btn ${render ==='clients' && 'active'}`} disabled={render ==='clients' && true} onClick={() => handleClick('clients')} >
                    <h4>Clients</h4></Button>              
            </div>
            <div className="admin-option-details">
                { render === 'database' &&  <Database />}
                { render === 'dashboard' && <NotAvaliable />}
                { render === 'analytics' && <NotAvaliable />}
                { render === 'clients' && <NotAvaliable />}
                { render === 'issues' && <NotAvaliable />}
            </div>
          
        </div>
    </>
}


export default AdminHome