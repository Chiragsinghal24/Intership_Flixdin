import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <img src="/images/logo.png"className="mx-auto w-24" alt="" />
      <h2 className="text-3xl font-normal text-center text-[#978839]">Login</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter username/email/mobile no.</span>
        </label>
        <input
          type="text"
          placeholder="Enter field"
          className="input bg-white rounded-full border-[#978839]"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter password</span>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="input rounded-full border-[#978839] bg-white"
        />
      </div>
      <div className="form-control mt-6">
        <button
          className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]"
          onClick={() => {
            window.location.href = "/thanks";
          }}
        >
          Login
        </button>
        <label className="label text-center mx-auto mt-8">
          <Link to="/register" className="label-text-alt link link-hover">
            Don’t have an account? Register!
          </Link>
        </label>
      </div>
    </>
  );
};

export default LoginForm;
