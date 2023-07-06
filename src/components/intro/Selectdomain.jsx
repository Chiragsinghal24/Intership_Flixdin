import React from 'react';
import { Link } from 'react-router-dom';
const Domainselectionform  = () => {
  return (
    <>
      <img src="/images/film.png" className='mx-auto w-20' alt="" />
      <p className="text-md font-semibold text-center text-black">Select domain</p>
      <p className="text-xs font-normal text-center text-black">The domain describes your main profession.</p>
      <div className="radio-container flex flex-col text-black text-sm">
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Actor"/><span>Actor</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Animation"/><span>Animation</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Art Director"/><span>Art Director</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Cinematographer"/><span>Cinematographer</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Director"/><span>Director</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Editor"/><span>Editor</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Music Director"/><span>Music Director</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Screenwriter"/><span>Screenwriter</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Sound Designer"/><span>Sound Designer</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="VFX Artist"/><span>VFX Artist</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Writer"/><span>Writer</span></div>
        <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Producer"/><span>Producer</span></div>
      </div>
      <div className="form-control mt-2">
        <button className="btn bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839] normal-case" onClick={() => { window.location.href = '/skills' }}>Next</button>
        <p className="text-1xl font-semibold text-center text-[#978839]"><Link to="/phone">Go back</Link></p>
        <label className="label text-center mx-auto mt-2">
          <Link to="/" className="label-text-alt link link-hover">Already have an account? Login!</Link>
        </label>
      </div>
    </>
  );
};

export default Domainselectionform ;
