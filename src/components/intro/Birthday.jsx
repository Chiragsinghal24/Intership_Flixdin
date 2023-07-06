import React from 'react';
import { Link } from 'react-router-dom';

const Birthdayform= () => {
  return (
    <>
      <img src="/images/cake.png" className='mx-auto w-20' alt="" />
      <p className="text-1xl font-semibold text-center text-black">Add your date of birth</p>
      <p className="text-1xl font-normal text-center text-black">This won’t be a part of a your public profile.</p>
      <div className="bg-white flex items-center">
        <input type="date" className="input text-center bg-transparent w-full z-20 border-[#978839]" />
        <span className='-ml-8 z-0 text-xl'>📅</span>
      </div>
      <p className='text-black text-center text-xs'>Please use your own date of birth even if this is for a business or some other purpose. No one will see this on your profile.</p>
      <div className="form-control mt-6">
        <button className="btn bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839] normal-case" onClick={() => { window.location.href = '/phone' }}>Next</button>
        <p className="text-1xl font-semibold text-center text-[#978839]"><Link to="/register">Go back</Link></p>
        <label className="label text-center mx-auto mt-8">
            <Link to="/register" className="label-text-alt link link-hover">Don’t have an account? Register!</Link>
        </label>
      </div>
    </>
  );
};

export default Birthdayform;
