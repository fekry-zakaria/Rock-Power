import img1 from "../assets/images/img2-removebg-preview.png";
const Contact = () => {
  return (
   <>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-9">
  <div className="">
  <img
            src={img1}
            alt="Hero"
            className="max-w-full h-auto hidden lg:block "
          />
  </div>

  <div className="flex items-center justify-center">
  <div >
      <h2 className="text-2xl md:text-2xl lg:text-4xl font-extrabold uppercase tracking-widest">
        <span className="text-[#bbfe32]">Our </span>
        <span className="text-white">Services</span>
      </h2>

      <ul className="mt-8 space-y-3 text-white text-2xl ">
        <li className="flex items-center gap-3 font-extrabold  ">
          <span className="w-2 h-2 bg-white"></span>
          <span className="font-semibold">
            MARKETING ( SEM & SEO )
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white"></span>
          <span className="font-semibold">E-COMMERCE SOLUTIONS</span>
        </li>

        <li className="flex items-center gap-3 lg:pl-6">
          <span className="w-2 h-2 bg-white"></span>
          <span className="font-semibold">APP DEVELOPMENT</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white"></span>
          <span className="font-semibold">DIGITAL MARKETING STRATEGY</span>
        </li>

        <li className="flex items-center gap-3 lg:pl-6">
          <span className="w-2 h-2 bg-white"></span>
          <span className="font-semibold">WEB DEVELOPMENT</span>
        </li>

        <li className="flex items-center gap-3 lg:pl-9">
          <span className="w-2 h-2 bg-white"></span>
          <span className="font-semibold">
            UX/UI DESIGN
          </span>
        </li>
      </ul>
    </div>
    
  </div>
  <div className=" ">

  <img
            src={img1}
            alt="Hero"
            className="max-w-full h-auto"
          />
  </div>
</div>
   
   </>
  );
};

export default Contact;

