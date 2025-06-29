import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function Root(){
    return <>
        <div style={{padding: '.1% 5%'}} id="main-client-cont">
            <Header />
                <Outlet />
            <Footer />
        </div>
    </>
}

export default Root