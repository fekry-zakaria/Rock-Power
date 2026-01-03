import img1 from "../assets/images/img2-removebg-preview.png";
const Home = () => {
  return (
   <>
    <div className=" flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Text Column */}
        <div className="px-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold  text-[#bbfe32] mb-1 md:mb-1 lg:mb-4">
            BOLD IDEAS 
            
          </h1>
          <span className="text-xl md:text-3xl lg:text-5xl  text-white font-bold">MASSIVE IMPACT</span>
          <p   className="text-gray-300 leading-relaxed text-xs md:text-s lg:text-lg text-shadow mt-6 font-extrabold ">
          OUR MISSION IS TO EMPOWER BRANDS TO BUILD A STRONG PRESENCE AND 
          STAND OUT ACROSS MARKETS THROUGH INTEGRATED  MARKETING
          SOLUTIONS THAT COMBIME WELL.CRAFTED STRATEGY, CREATVE DESIGN,
          AND CUTTING-EDGE TECHNOLOGY,WE BELIEVE THAT OUR CLIENTS'SUCCESS
          IS AN EXTENSION OF OUR OWN, WHICH IS WHV WE TREAT EVERV CLIENT AS A
          STRATEGIC PARTNER AND TRANSFORM THEIR VISIONS INTO TANGIBLE
          ACHIEVEMENTS THROUGM A PROFESSIONAL TEAM COOMMITTED TO THE 
          HIGHEST STANDARDS OF QUALITY AND SUSTAINABLE RESULTS.


          </p>

        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Hero"
            className="w-2xl "
          />
        </div>

      </div>
    </div>
   
   </>
  );
};

export default Home;

