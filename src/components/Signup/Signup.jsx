import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='from-container'>
            <h3 className='form-title'>Sign up</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Your password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Your password' required/>
                </div>

                <input className='btn-submit' type="submit" value="Sign up" />
            </form>
            <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default Signup;