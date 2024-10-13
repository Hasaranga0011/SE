/*
import React, { useState} from "react";
import './Login.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const [values, setValues] = useState({
        email: '',
        password: ''

    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;


    const handleSubmit =(event) =>{
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result =>{
            if(result.data.loginStatus){

                navigate('/dashboard')
            } else{
                setError(result.data.Error)

            }
           

        })
        .catch(err => console.log(err))

    }



    return(
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-danger'>
                    {error && error}
                </div>
             
                <h2>Union Pharmacy</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name="email" autoComplete='off' placeholder='Enter Email'
                        onChange={(e) => setValues({...values,email : e.target.value})}className='form-control round-0 '/>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name="password"  placeholder='Enter Password'
                         onChange={(e) => setValues({...values, password : e.target.value})}className='form-control round-0 '/>

                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Login In</button>
                    <div className='mb-1'>
                        <input type="checkbox" name="tick" id='tick'/>
                        <label htmlFor="password">You are Agree with Terms and Conditions</label>
                      

                    </div>
                </form>
            </div>
        </div>
            
            
            
        
    )
}

export default Login;
*/
/*

import React, { useState } from "react";
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values)
            .then(result => {
                if (result.data.loginStatus) {
                    navigate('/dashboard');
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                {error && <div className='text-danger'>{error}</div>}
                <h2>Union Pharmacy</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete='off'
                            placeholder='Enter Email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className='form-control round-0 '
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className='form-control round-0 '
                        />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Log In</button>
                    
                </form>
            </div>
        </div>
    );
}

export default Login;
*/
/*
import React, { useState } from "react";
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '', role: 'admin' }); // Added 'role'
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/login', values) // Update endpoint to 'login'
            .then(result => {
                if (result.data.loginStatus) {
                    if (result.data.role === 'admin') {
                        navigate('/dashboard');
                    } else if (result.data.role === 'pharmacist') {
                        navigate('/pharmacist');
                    }
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                {error && <div className='text-danger'>{error}</div>}
                <h2>Union Pharmacy</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete='off'
                            placeholder='Enter Email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className='form-control round-0 '
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className='form-control round-0 '
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="role"><strong>Role:</strong></label>
                        <select
                            id="role"
                            name="role"
                            onChange={(e) => setValues({ ...values, role: e.target.value })}
                            className='form-control round-0 '
                            value={values.role}
                        >
                            <option value="admin">Admin</option>
                            <option value="pharmacist">Pharmacist</option>
                        </select>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
*/

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '', role: 'admin' }); // Added 'role'
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/login', values) // Update endpoint to 'login'
            .then(result => {
                if (result.data.loginStatus) {
                    if (result.data.role === 'admin') {
                        navigate('/dashboard');
                    } else if (result.data.role === 'pharmacist') {
                        navigate('/pharmacist');
                    }
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                {error && <div className='text-danger'>{error}</div>}
                <h2>Union Pharmacy</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="role"><strong>Role:</strong></label>
                        <select
                            id="role"
                            name="role"
                            onChange={(e) => setValues({ ...values, role: e.target.value })}
                            className='form-control round-0 '
                            value={values.role}
                        >
                            <option value="admin">Admin</option>
                            <option value="pharmacist">Pharmacist</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete='off'
                            placeholder='Enter Email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className='form-control round-0 '
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className='form-control round-0 '
                        />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
