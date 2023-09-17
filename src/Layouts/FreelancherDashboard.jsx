import { Outlet } from "react-router-dom";
import FreelancherNavbar from "../Shared/freelancherNavbar/FreelancherNavbar";

const FreelancherDashboard = () => {
    return (
        <div>
            <FreelancherNavbar></FreelancherNavbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default FreelancherDashboard;