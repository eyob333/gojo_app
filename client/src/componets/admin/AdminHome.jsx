import Button from "../ui/button"
import FileUpload from "../../pages/Upload"
import './AdminHome.css'

function AdminHome({admin = 'admin'}){

    return <>
        <div className="admin-heading">
            <h2>welcome back {admin}</h2>            
        </div>

        <div className="admin-nav">
            <div className="admin-option">
                <Button className="admin-option-btn" ><h4>Analytics</h4></Button>
                <Button className="admin-option-btn" ><h4>Database</h4></Button>
                <Button className="admin-option-btn" ><h4>Issues</h4></Button>
                <Button className="admin-option-btn" ><h4>Clients</h4></Button>              
            </div>
            <div className="admin-option-details">
                {/* <FileUpload /> */}
            </div>
          
        </div>

    </>
}


export default AdminHome