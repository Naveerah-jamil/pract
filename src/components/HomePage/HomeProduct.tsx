import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const HomeProduct = () => {
  return (
    <div className="w-[1050px] h-[461px] flex justify-between items-center ml-[170px] mr-[170px]">
      <div className="w-[312px] h-[377px] mt-[84px] rounded-[6px]">
        <Image
          src="/Image.png"
          alt="loading"
          width={312}
          height={312} // Ensures all images maintain same height
        />
        <div className="text-green-400 flex justify-between items-center">
          Library stool chair
          <CiShoppingCart className="bg-[green] text-white items-center mt-[10px] rounded-[6px] w-[44px] h-[44px] " />
        </div>

        <p className="text-bold text-black"> $20</p>
      </div>
      <div className="w-[312px] h-[377px] mt-[84px] ml-[12px] rounded-[10px]">
        <Image
          src="/Image1.png"
          alt="loading"
          width={312}
          height={312} // Ensures all images maintain same height
        />
        <div className="text-green-400 flex justify-between items-center">
          Library stool chair
          <CiShoppingCart className="bg-[green] text-white items-center mt-[10px] rounded-[6px] w-[44px] h-[44px] " />
        </div>

        <p className="text-bold text-black"> $20</p>
        
      </div>
      <div className="w-[312px] h-[377px] mt-[84px] ml-[12px] rounded-[10px]">
        <Image
          src="/Image3.png"
          alt="loading"
          width={312}
          height={312} // Ensures all images maintain same height
        />
        <div className="text-green-400 flex justify-between items-center">
          Library stool chair
          <CiShoppingCart className="bg-[green] text-white items-center mt-[10px] rounded-[6px] w-[44px] h-[44px] " />
        </div>

        <p className="text-bold text-black"> $20</p>
      </div>
      <div className="w-[312px] h-[377px] mt-[84px] ml-[12px] rounded-[10px]">
        <Image
          src="/Image4.png"
          alt="loading"
          width={312}
          height={312} // Ensures all images maintain same height
        />
        <div className="text-green-400 flex justify-between items-center">
          Library stool chair
          <CiShoppingCart className="bg-[green] text-white items-center mt-[10px] rounded-[6px] w-[44px] h-[44px] " />
        </div>

        <p className="text-bold text-black"> $20</p>
      </div>
    </div>
  );
};

export default HomeProduct;
