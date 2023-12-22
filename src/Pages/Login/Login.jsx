/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
          .then((result) => {
            console.log(result.user);
            setSuccess(Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'You have successfully logged in!',
            }));
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            setError(error.message);
            // Make sure to set loading state back to false in case of an error
            setLoading(false);
          });
      };
      

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then((result)=>{
            const loggedUser =result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
    }

    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    {error && <p className="text-red-600 font-medium text-lg px-4 pt-7">{error}</p>}
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
          <p className='mt-4 underline'>Do not have an account? <Link to="/register" className='text-blue-600 font-bold'> Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleLogin} className="btn btn-error mt-5">Google Login</button>
        </div>
      </form>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;