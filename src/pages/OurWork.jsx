import img1 from "../assets/images/img2-removebg-preview.png";

const Ourwork = () => {
  return (
    <div className="flex ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 ">

        
        {/* Text Column */}
        <div className=" md:col-span-7 mt-7  ">
          <h1 className="text-2xl md:text-2xl   lg:text-6xl font-bold  text-[#bbfe32] mb-4">
            WHO
            <span className="text-2xl md:text-2xl   lg:text-6xl  text-white font-bold"> WE ARE ? </span>
          </h1>
        
         <p className="text-gray-300 leading-relaxed text-xs md:text-s lg:text-lg text-shadow mt-6 font-extrabold ">
            WE TRANSFORM IDEAS INTO EXEPTIONAL EXPERIENCES,EXECUTED WITH 
            PRECISION AND PROFESSIONALISM FROM CONCEPT TO FINAL DELIVER.WE 
            ARE A SPECIALIZED TEAM WITH DEEP HANDS-ON EXPERIENCE, WORKING 
            UNDER THE LEADERSHIP OF EXPERTS IN MARKETING, COMMUNICATION, AND 
            TECHNOLOGY TO ACHIEVE MEASURABLRESULTS AND LOGN-TERM CLIENT 
            SATISFACTION
         </p>


         {/* Stats Section */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
  
  <div className="text-center">
    <h2 className="text-4xl md:text-4xl lg:text-7xl font-bold text-[#bbfe32]">
      +06
    </h2>
    <p className="mt-2 text-xs uppercase tracking-wide">
      YEARS OF EXPERIENCE
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-4xl  md:text-4xl lg:text-7xl font-bold text-[#bbfe32]">
      +120
    </h2>
    <p className="mt-2 text-xs uppercase tracking-wide ">
      CLIENTS SERVED SUCCSSFULLY
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-4xl  md:text-4xl lg:text-7xl font-bold text-[#bbfe32]">
      +05
    </h2>
    <p className="mt-2 text-xs uppercase tracking-wide ">
      COUNTRIES WE HAVE WORKED IN
    </p>
  </div>

</div>

        </div>

        {/* Image Column */}
        <div className="flex justify-center md:col-span-5">
          <img
            src={img1}
            alt="Hero"
            className="w-[200px] sm:w-[260px] md:w-full h-auto"
          />
        </div>


      </div>
    </div>
  );
};

export default Ourwork;
