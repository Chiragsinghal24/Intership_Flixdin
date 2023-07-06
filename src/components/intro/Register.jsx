import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <img src="/images/logo.png" className="mx-auto w-24" alt="" />
      <h2 className="text-3xl font-normal text-center text-[#978839]">
        Register
      </h2>
      <div className="form-control -mb-2 -mt-1">
        <label className="label py-1">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter name"
          className="input bg-white rounded-full border-[#978839]"
        />
      </div>
      <div className="form-control -mb-2 -mt-1">
        <label className="label py-1">
          <span className="label-text">Username</span>
        </label>
        <input
          type="password"
          placeholder="Enter username"
          className="input rounded-full border-[#978839] bg-white"
        />
      </div>
      <div className="form-control -mb-2 -mt-1">
        <label className="label py-1">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="input rounded-full border-[#978839] bg-white"
        />
      </div>
      <div className="form-control -mb-2 -mt-1">
        <label className="label py-1">
          <span className="label-text">Mobile no.</span>
        </label>
        <input
          type="email"
          placeholder="Enter mobile no."
          className="input rounded-full border-[#978839] bg-white"
        />
      </div>
      <div className="form-control -mb-2 mt-3">
        <button className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]">
          <Link to="/birthday">Register</Link>
        </button>
        <label className="label text-center mx-auto">
          <Link to="/" className="label-text-alt link link-hover">
            Already have an account? Login!
          </Link>
        </label>
      </div>
    </>
  );
};

export default RegisterForm;
