import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center justify-center mt-30">
      <div className="max-w-prose">

        <h2 className="font-black text-[#bbfe32] text-9xl text-center">
          شكراً لكم
        </h2>

        <h2 className="font-black text-white text-3xl lg:text-8xl text-center mt-4">
          THANK YOU
        </h2>

        {/* 🔴 Social Row */}
        <div className="flex items-center justify-center mt-6 text-lg">
          <span className="text-white  text-3xl font-black">KSA.</span>

          <div className="flex items-center gap-2">
           
            <span className="text-[#bbfe32] text-3xl font-black">ROCKPOWER</span>
            <FaInstagramSquare className="text-[#bbfe32] w-8 h-8" />
            <FaFacebook className="text-[#bbfe32] w-8 h-8" />
           
          </div>
        </div>
        <a href="">

            
        </a>
        <div className="flex items-center justify-center mt-2 text-lg">

          <span className="text-white  text-3xl font-black">ONLINE.</span>

          <div className="flex items-center gap-2">
           
            <span className="text-[#bbfe32] text-3xl font-black">ROCKPOWER</span>
            <FaLocationArrow className="text-[#bbfe32]  w-8 h-8 "  />
            
           
          </div>
        </div>

      </div>
    </div>
  );
};

export default Social;
