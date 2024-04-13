import React, { ReactNode } from "react";
import SideNavbar from "@/components/SideNavbar";
import NavBar from "@/components/NavBar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <NavBar/>
      <div className="flex">
        <SideNavbar/>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:px-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
