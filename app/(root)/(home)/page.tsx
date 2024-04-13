import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col gap-10 text-white size-full ">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover ">
        <div className="flex flex-col justify-between max-md:py-8 max-md:px-5 lg:p-11">
          <h1 className="glassmorphism w-[270px] rounded py-5 text-center text-base font-normal">
            Upcoming Meeting at 12:30 PM
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">11:30 am</h1>
            <p className="">Saturday ,March 23, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
