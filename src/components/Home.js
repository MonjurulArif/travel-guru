import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { touristSpots } from "../resources/constants";

const Home = () => {
  console.log(touristSpots);

  const [currentSpot, setCurrentSpot] = useState(0);

  const selectedSpot = (spotIndex) => {
    setCurrentSpot(spotIndex);
  };

  const prevSpot = () => {
    //isFirstSpot = true; because currentSpot===0
    const isFirstSpot = currentSpot === 0;
    const newSpot = isFirstSpot ? touristSpots.length - 1 : currentSpot - 1;
    setCurrentSpot(newSpot);
    // console.log(newSpot);
  };

  const nextSpot = () => {
    const isLastSpot = currentSpot === touristSpots.length - 1;
    const newSpot = isLastSpot ? 0 : currentSpot + 1;
    setCurrentSpot(newSpot);
  };

  // useEffect(() => {}, [currentSpot]);

  return (
    <div className="relative z-11 top-24 w-full ">
      <div className="flex flex-row">
        <div className="w-5/12 h-[480px] text-3xl p-9 pr-24 mr-10 lg:ml-16 text-white">
          <h1 className="h-[85px] w-[390px] font-bold text-6xl">{touristSpots[currentSpot].name} </h1>
          {touristSpots[currentSpot].description.length > 200 ? (
            <>
              <p className="text-lg font-normal text-white ">{touristSpots[currentSpot].description.slice(0, 200) + "..."}</p>
            </>
          ) : (
            <p className="text-lg font-normal text-white ">{touristSpots[currentSpot].description}</p>
          )}
          <div className="h-12 w-40 flex items-center rounded-md mt-5 pr-4 bg-[#F9A51A] text-xl text-black font-bold">
            <div className="h-full w-full flex items-center justify-center">
              <Link to="/booking">Booking</Link>
            </div>
            <FaArrowRight size={22} className="mr-3" />
          </div>
        </div>
        <div className="carousel w-7/12 h-[480px] flex overflow-x-auto scrollbar-hide scroll-smooth pt-4 text-3xl text-white whitespace-nowrap">
          {touristSpots.map((spot, spotIndex) => (
            <div className="flex-none mr-4 ">
              {/* <div onclick={prevSpot} className="min-w-[300px] mr-4"> */}
              <img
                src={spot.image}
                onClick={() => selectedSpot(spotIndex)}
                key={spotIndex}
                height={420}
                width={270}
                alt=""
                className={
                  spotIndex === currentSpot
                    ? "object-cover mr-8 rounded-2xl border-4 border-yellow-400 brightness-75 hover:cursor-pointer"
                    : "object-cover mr-8 rounded-2xl brightness-75 hover:cursor-pointer"
                }
              />
              <h3 className="relative bottom-14 left-4">{spot.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="border rounded-3xl text-black bg-white mr-2 hover:bg-orange-500 hover:cursor-pointer">
          <BiChevronLeft onClick={prevSpot} size={30} />
        </div>
        <div onClick={nextSpot} className="border rounded-3xl text-black bg-white hover:bg-orange-500 hover:cursor-pointer">
          <BiChevronRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="w-7/12 h-[420px] flex overflow-hidden pt-4 text-3xl text-yellow-400">
// {touristSpots.map((spot) => (
//   <img src={spot.image} height={400} width={320} alt="" className="object-cover mr-8 rounded-2xl" />
// ))}
// </div>
