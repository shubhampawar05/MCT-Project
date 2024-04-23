import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";


const Navbar = () => {
    const {pathname} = useLocation()
    console.log(pathname);

    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-5  font-bold text-md px-5 ">
            {/* Home */}
            <li >
                <Link to={'/'} className={`${pathname === '/' ? 'w-10 h-1 border-b-2 border-red-400 rounded-md p-1 text-red-500':''}`}>Home</Link>
                
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'} className={`${pathname === '/allproduct' ? 'w-10 h-1 border-b-2 border-red-400 rounded-md p-1 text-red-500':''}`}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'} className={`${pathname === '/signup' ? 'w-10 h-1 border-b-2 border-red-400 rounded-md p-1 text-red-500':''}`}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'} className={`${pathname === '/login' ? 'w-10 h-1 border-b-2 border-red-400 rounded-md p-1 text-red-500':''}`}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'} className={`${pathname === '/user-dashboard' ? 'w-10 h-1 border-b-2 border-red-400 rounded-md p-1 text-red-500':''}`}>{user.name}</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'} className={`${pathname === '/admin-dashboard' ? 'w-10 h-1 border-b-2 border-red-400 rounded-md p-1 text-red-500':''}`}>{user.name}</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer bg-red-400 text-white py-1 px-2  rounded shadow-md " onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                <PiShoppingCartSimpleDuotone className="inline text-2xl relative text-gray-600" />
                  <span className="absolute top-2 right-[47.5%] text-red-900 ">{cartItems.length}</span>
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-white shadow-xl sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 max-w-screen-2xl mx-auto ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-black text-2xl text-center">MCT-Project</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
