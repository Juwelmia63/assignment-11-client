import { Outlet } from "react-router-dom";
import Navber from "../pages/sharedpage/Navber/Navber";
import Footer from "../pages/sharedpage/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;