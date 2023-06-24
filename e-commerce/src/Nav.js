import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
const Nav = () => {
    
        const auth = localStorage.getItem("user");

        const navigate = useNavigate()
        const logout = () => {
            localStorage.clear()
            navigate("/signup")
        }
        const HandleChange = () => {
            alert("Select Product for Update")
            navigate("/")
        }

    return(
        <>
        <div>
            {auth ?
            <>
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/" onClick={HandleChange}>Update Product</Link></li>
                {/* <li><Link to={"/profile/" + JSON.parse(auth)._id}>Profile</Link></li> */}
                 <li><Link onClick={logout} to="/signup">Logout</Link></li>

                 <li className='profile-icon'><Link to={"/profile/" + JSON.parse(auth)._id}>{JSON.parse(auth).name.charAt(0).toUpperCase()}</Link></li>
                 </ul>
                 </>
                 :
                <ul className='nav-ul right-ul'>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
        </>
    )
}
export default Nav;