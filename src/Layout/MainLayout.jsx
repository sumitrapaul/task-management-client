import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    const location = useLocation()
    const navFoot = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="overflow-x-hidden">
          {navFoot || <Navbar/>}
          <Outlet/>
          {navFoot || <Footer/>}  
        </div>
    );
};

export default MainLayout;