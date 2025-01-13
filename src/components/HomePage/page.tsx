import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeProduct from "./HomeProduct";
const page = () => {
  
      return (
    <div>
      <div className="flex items-center justify-between">
        {/* Main Container */}
        <div className="w-[1050px] h-[850px] mx-auto bg-[#F0F2F3] flex">
          {/* Left Section */}
          <div className="w-[60%] h-full pt-[229px] pl-[70px]">
            <h1 className="font-Inter font-light text-[14px] leading-[14px] tracking-[12%]">
              Welcome to Chairy
            </h1>
            <div className="font-Inter font-bold text-[50px] leading-[66px] tracking-[12%] text-[#272343] mt-6">
              Best Furniture <br /> Collection for your <br />
              interior.
            </div>
            <div className="w-[171px] h-[52px] mt-[70px] rounded-[8px] bg-[#029FAE] flex items-center justify-center">
              <button className="text-[16px] leading-[17.6px] font-Inter text-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-[40%] h-full flex justify-end items-center pr-[50px]">
            <Image
              src="/Product Image.png"
              alt="chair"
              width={438}
              height={584}
            />
          </div>
        </div>
      </div>

      <ul className="w-[1050px] h-[139px]  flex justify-between items-center ">
        <li className="pl-[200px]">
          <Link href="/">
            <Image src="/zapier.png" alt="Logo" width={85} height={85} />
          </Link>
        </li>

        <li className="pl-[50px]">
          <Link href="/">
            <Image src="/pipedrive.png" alt="Logo" width={85} height={85} />
          </Link>
        </li>

        <li className="pl-[50px]">
          <Link href="/">
            <Image src="/cib_bank.png" alt="Logo" width={85} height={85} />
          </Link>
        </li>

        <li className="pl-[50px]">
          <Link href="/">
            <Image src="/zapier.png" alt="Logo" width={85} height={85} />
          </Link>
        </li>

        <li className="pl-[50px]">
          <Link href="/">
            <Image src="/burnt_toast.png" alt="Logo" width={85} height={85} />
          </Link>
        </li>

        <li className="pl-[50px]">
          <Link href="/">
            <Image src="/zapier.png" alt="Logo" width={85} height={85} />
          </Link>
        </li>
      </ul>
      <HomeProduct/>
    </div>
  );
};

export default page;
