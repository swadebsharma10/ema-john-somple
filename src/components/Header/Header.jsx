import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () =>{
        // call the logOut form AuthProvider
        logOut()
        .then(() =>{})
        .catch(error=> console.error(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='link'>
                <Link to ="/">Shop</Link>
                <Link to ="/orders">Orders</Link>
                <Link to ="/inventory">Inventory</Link>
                <Link to ="/login">LogIn</Link>
                <Link to ="/signup">Sign Up</Link>
                {
                user && <span>Welcome {user.email} <button onClick={handleLogOut} >Sign out</button> </span>
                }
            </div>
        </nav>
    );
};

export default Header;