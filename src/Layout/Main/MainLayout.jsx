import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/>   
        </>
    );
};

export default MainLayout;