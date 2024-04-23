import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <div className="">
            <Navbar />
            <div className="main-content max-w-screen-2xl mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
