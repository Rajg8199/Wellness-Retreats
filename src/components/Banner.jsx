import React from "react";

function Banner() {
  return (
    <div className="bg-[#e0d9cf] p-5">
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxZb2dhJTIwfGVufDF8fHx8MTcyMTc1MzMzNXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="" className="w-full h-64 object-cover top-24 left-6 z-10;"
      />
      <h1 className="text-2xl text-[##030303] pt-2 pb-2">Discover Your Inner Peace</h1>
      <p>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
    </div>
  );
}

export default Banner;
