import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password .value;
        console.log(email,password);

        // Validation is not important here

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            // if successful clear the form
            form.reset();
        })
        .catch(error =>{
            console.log(error);
        })


    }

    return (
        <div className='from-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleLogIn}>
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