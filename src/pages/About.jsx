import img1 from "../assets/images/img2-removebg-preview.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import { GiAirtightHatch } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const AboutUS = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* Text - FIRST on Mobile */}
        <div className="order-1 md:order-2 md:col-span-7 md:px-6 md:pl-20  md:text-left">

          <h1 className="text-2xl md:text-2xl   lg:text-6xl font-bold mb-6">
            <span className="text-[#bbfe32]">WHY </span>
            <span className="text-white">ROCK POWER ?</span>
          </h1>

          <ul className="text-white space-y-2 md:space-y-4 font-bold">
            <li className="flex items-start md:items-center gap-1 md:gap-3  md:justify-start">
              <BsFillPatchCheckFill className="text-[#bbfe32] text-lg md:text-2xl mt-1 md:mt-0" />
              <span className="text-sm md:text-sm lg:text-xl">
                SPECIALIZED AND HIGH-QUALITY COMMUNICATION SOLUTION
              </span>
            </li>

            <li className="flex items-start md:items-center gap-1 md:gap-3  md:justify-start">
              <LuHandshake className="text-[#bbfe32] text-lg md:text-2xl mt-1 md:mt-0" />
              <span className="text-sm md:text-sm lg:text-xl">
                CREATIVE AND DEDICATED TEAM
              </span>
            </li>

            <li className="flex items-start md:items-center gap-1 md:gap-3  md:justify-start">
              <RiCustomerService2Fill className="text-[#bbfe32] text-lg md:text-2xl mt-1 md:mt-0" />
              <span className="text-sm md:text-sm lg:text-xl">
                AFTER-SALES SERVICES
              </span>
            </li>

            <li className="flex items-start md:items-center gap-1 md:gap-3  md:justify-start">
              <GiAirtightHatch className="text-[#bbfe32] text-lg md:text-2xl mt-1 md:mt-0" />
              <span className="text-sm md:text-sm lg:text-xl">
                FREE TRAINING AND FAST TECHNICAL SUPPORT
              </span>
            </li>
          </ul>

        </div>

        {/* Image - SECOND on Mobile */}
        <div className="order-2 md:order-1 flex justify-center md:col-span-5">
          <img
            src={img1}
            alt="Hero"
            className="w-[200px] sm:w-[260px] md:w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUS;
