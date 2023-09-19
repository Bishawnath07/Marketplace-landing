import { Outlet } from "react-router-dom";
import FreelancherNavbar from "../Shared/freelancherNavbar/FreelancherNavbar";
import Footer from "../Shared/Footer/Footer";

const FreelancherDashboard = () => {
    return (
        <div>
            <FreelancherNavbar></FreelancherNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default FreelancherDashboard;