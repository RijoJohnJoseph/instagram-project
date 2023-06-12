import React from "react";
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <img
                className="h-12 w-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/06/30/01/37/referee-1488156_640.jpg"
                alt=""
              />

              <div className="ml-3">
                <p className=" flex font-semibold text-sm">username</p>
                <p className="font-semibold opacity-70 text-sm">Full Name</p>
              </div>
            </div>
            <div>
              <p className='text-blue-700 text-sm font-semibold'>Switch</p>
            </div>
          </div>
          <div className="space-y-3 mt-10">
            {[1,1,1,1,1,1].map((item)=><SuggestionCard/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
