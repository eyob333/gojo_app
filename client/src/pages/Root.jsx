import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function Root(){
    return <>
        <Header />
            <Outlet />
        <Footer />
    </>
}

export default Root