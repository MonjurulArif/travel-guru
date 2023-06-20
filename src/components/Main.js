import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Background from "../assets/Background.png";

const Main = () => {
  return (
    <div className="h-screen w-full relative">
      <div
        className="w-full h-screen object-cover absolute mix-blend-overlay brightness-[0.4] z-0"
        style={{ backgroundSize: "cover", backgroundImage: `url(${require("../assets/Background.png")})` }}
      ></div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

// <div className="h-screen w-full relative">
//     <div
//       className="w-full h-screen object-cover absolute mix-blend-overlay brightness-[0.4] z-0"
//       style={{ backgroundSize: "cover", backgroundImage: `url(${require("../assets/Background.png")})` }}
//     ></div>
//     <div
//       className="w-full h-full object-cover absolute mix-blend-overlay brightness-[0.4]"
//       style={{ width: "1725px", height: "900px", backgroundSize: "cover", backgroundImage: `url(${Background})` }}
//     ></div>
//     <div
//       className="w-full h-full object-cover absolute mix-blend-overlay brightness-[0.4]"
//       style={{ width: "1400px", height: "900px", backgroundSize: "cover", backgroundImage: `url("../assets/Background.png")})` }}
//     ></div>
//     <Header></Header>
//     <Outlet></Outlet>
//   </div>

//   <div className="h-screen w-full relative">
//     <img className="w-full h-full object-cover absolute mix-blend-overlay brightness-[0.4]" src={Background} alt=""></img>
//     <Header></Header>
//     <Outlet></Outlet>
//   </div>
