import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="pt-16 pb-2 md:pb-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">

        {/* Logo */}
        <div className="h-32 rounded lg:col-span-4">
          <img src={logo} alt="" />
        </div>

        {/* Services */}
        <div className="rounded md:text-2xl text-white lg:col-span-4">
          <p className="text-white font-bold ">SERVICES</p>
          <ul className="mt-2  text-white md:text-2xl ">
            <li className="flex items-center gap-3 font-extrabold">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                MARKETING ( SEM & SEO )
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                E-COMMERCE SOLUTIONS
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                APP DEVELOPMENT
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                DIGITAL MARKETING STRATEGY
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                WEB DEVELOPMENT
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                UX/UI DESIGN
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="rounded md:text-2xl text-white lg:col-span-4">
          <p className="text-white font-bold ">LINKS</p>
          <ul className="mt-2  text-white md:text-2xl ">
            <li className="flex items-center gap-3 font-extrabold">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
               HOME
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
               CONTECT US
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
               ABOUT US
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                PRIVACY POLICY
              </a>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white"></span>
              <a href="#" className="font-semibold">
                TERMS OF USE
              </a>
            </li>

           
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
