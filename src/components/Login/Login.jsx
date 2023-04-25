import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='from-container'>
            <h3 className='form-title'>Login</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Your password' required/>
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New-to-Emz?<Link to='/signup'>Create a new account?</Link> </small></p>
        </div>
    );
};

export default Login;