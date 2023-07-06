import { Outlet } from "react-router-dom";

const Auth = ({ children }) => {
  return (
    <div className="hero bg-[#f0eac7] min-h-screen">
      <img src="/images/reel.png" alt="" className="absolute left-32 h-screen top-0" />
      <div className="hero-content flex-col lg:flex-row max-w-5xl w-full justify-between">
        <div className="text-center lg:text-left text-[#C6B34E] lg:ml-24">
          <h1 className="text-9xl font-semibold">flixdin</h1>
        </div>
        <div className="card flex-shrink-0 w-full ml-15 h-[600px] max-w-xs border-2 scale-110 border-[#C6B34E] bg-white">
          <div className="card-body ">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};

//sun flixdin ko left lele halka sa

export default Auth;
