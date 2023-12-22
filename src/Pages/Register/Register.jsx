/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";

import { AuthContext } from "../../Providers/AuthProvider";
import app from "../../Firebase/Firebase.config";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const auth =getAuth(app);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");

    const user = { name, email, password, photoUrl };

    console.log(user);

    fetch(`https://mediafusion-qbz1u62zn-naazmun-najs-projects.vercel.app/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    try {
      if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/.test(password)) {
        setError(
          "Password must be at least 6 characters long, contain at least one uppercase letter, and at least one special character."
        );
        setLoading(false);
      } else {
        setError("");
        await createUser(email, password);
       
        setSuccess(
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have successfully Registered!",
          })
        );
        await updateUser(auth.currentUser,{
          name, photoUrl
        });

        navigate(location?.state ? location.state : "/");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              {error && (
                <p className="text-red-600 font-medium text-lg px-4 pt-7">
                  {error}
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Set your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  id="photoUrl"
                  name="photoUrl"
                  placeholder="Enter Photo URL"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="mt-4 underline">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-bold">
                      {" "}
                      Login
                    </Link>
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-sky-300 text-red-500">
                  Register
                </button>
                <button className="btn bg-red-400 text-green-700 my-5">
                  Google Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
