import React from 'react';
import { Link } from 'react-router-dom';
const Skillselectionform = () => {
  return (
    <>
      <img src="/images/Skills.png"className='mx-auto w-24' alt="" />
      <p className="text-1xl font-semibold text-center text-black">Add Other Skills</p>
      <p className="text-1xl font-normal text-center text-black">Add other skills other than the main domain selected.</p>
      <div className="radio-container border border-[#978839] p-3 rounded-md flex flex-col text-black text-sm">
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
        <button className="btn bg-[#C6B34E] rounded-full normal-case border-none text-black hover:bg-[#978839]"onClick={() => { window.location.href = '/terms'}}>Add Skills</button>
        <label className="label text-center mx-auto mt-1">
          <Link to="/" className="label-text-alt link link-hover">Already have an account? Login!</Link>
        </label>
      </div>
    </>
  );
};

export default Skillselectionform;
