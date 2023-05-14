import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const {user, logout} = useContext(AuthContext)

    const handleLogout = () =>{
        logout()
        .then(()=>{
            alert('logout successful')
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/bookings' className="ml-3">My Bookings</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 my-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                {
                    user ?
                    <>
                    <li><Link onClick={handleLogout} className="ml-3">Logout</Link></li>
                    </> :
                    <li><Link to='/login' className="ml-3">Login</Link></li>
                }
                </ul>
            </div>
            <div className="navbar-end">
                <p>{user?.email}</p>
                <a className="btn btn-outline btn-error">Appointment</a>
                
            </div>
        </div>
    );
};

export default Navbar;