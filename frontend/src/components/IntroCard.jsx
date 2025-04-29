import React from "react";
import { cn } from "../../utils";
import obj from "../../data"



const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 h-150">
            <div className="w-[80%] p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-120">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                    {/* TODO */}
                    <img
                        src={obj.image_1}
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-[100%] aspect-square object-cover object-left-top rounded-sm"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};


const FeatureCard = ({
    children,
    className,
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }) => {
    return (
        <p className=" max-w-5xl mx-auto text-center tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-center mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-center  md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};


const IntroCard = () => {
    return (
        <FeatureCard key={`Track issues effectively`} className={`text-center lg:col-span-4 `}>
            <FeatureTitle>{`Track issues effectively`}</FeatureTitle>
            <FeatureDescription>{`Track and manage your project issues with ease using our intuitive interface.`}</FeatureDescription>
            <div className=" h-full w-full"><SkeletonOne/></div>
        </FeatureCard>
    )
}

export default IntroCard
