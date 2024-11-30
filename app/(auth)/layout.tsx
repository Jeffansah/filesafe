import Image from "next/image";
import React from "react";
import hero from "../../public/packaging.png";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <section className="bg-cyan-400/20 p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] justify-center flex-col gap-y-10">
          <h2 className="text-4xl font-extrabold">
            File<span className="text-cyan-400">Safe</span>
          </h2>
          <h3 className="font-extrabold text-5xl max-w-md">
            Secure storage for all your files
          </h3>
          <p className="max-w-md text-light-100">
            Effortlessly manage and store your files with secure, encrypted
            access whenever you need them.
          </p>
          <Image
            src={hero}
            alt="layout hero"
            width={300}
            height={300}
            className="w-64 mt-10 transition-transform ease-in-out duration-300 hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 max-lg:mb-12 lg:hidden">
          <h1 className=" text-5xl font-bold lg:text-[250px]">
            File
            <span className="text-cyan-400">Safe</span>
          </h1>
        </div>
        {children}
      </section>
    </div>
  );
};

export default layout;
