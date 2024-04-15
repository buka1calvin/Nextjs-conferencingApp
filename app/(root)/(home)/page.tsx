import React from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const time=new Date().toLocaleString('en-US',{hour:"2-digit",minute:"2-digit"})
  const date=(new Intl.DateTimeFormat('en-US',{dateStyle:"full"})).format(new Date())
  return (
    <section className="flex flex-col gap-10 text-white size-full ">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover ">
        <div className="flex flex-col justify-between max-md:py-8 max-md:px-5 lg:p-11">
          <h1 className="glassmorphism w-[270px] rounded py-5 text-center text-base font-normal">
            Upcoming Meeting at 12:30 PM
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
};

export default Home;
