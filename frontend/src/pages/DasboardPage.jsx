
import React from "react";
import { ContainerScroll } from "../components/ContainerScrollAnimation";
import obj from "../../data";
import { NavbarDemo } from "../components/NavbarDemo";
import Footer from "../components/Footer";
import { NavbarButton } from "../components/Navbar";

export function DashBoardPage() {
  return (
    <>
      <NavbarDemo />
      <div className="flex flex-col overflow-hidden mt-[-12rem]">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Get your dashboard now <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Unleash AI
                </span>
              </h1>
            </>
          }>
          <img
            src={obj.dashboard_ss}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false} />
        </ContainerScroll>
      </div>
      <div className="w-full flex items-center justify-center mt-[-8rem]">
        <NavbarButton variant="primary" className={'w-[30%] text-center text-white bg-red-400'}>Get Yours Now</NavbarButton>
      </div>

      <Footer />
    </>
  );
}
