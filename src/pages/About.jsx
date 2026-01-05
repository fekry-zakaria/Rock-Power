import about from "../assets/images/about.jpeg";
// import { BsFillPatchCheckFill } from "react-icons/bs";
// import { LuHandshake } from "react-icons/lu";
// import { GiAirtightHatch } from "react-icons/gi";
// import { RiCustomerService2Fill } from "react-icons/ri";

const AboutUS = () => {
  return (
    <>
<section>
  <div className=" px-4 pt-6 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">

    <div className="relative flex justify-center items-center">


{/* Image */}
<img
  src={about}
  alt=""
  className="block max-w-none h-[650px]"
/>
</div>
      <div>
        <div className="max-w-prose md:max-w-none text-center  ">
          <h2 className=" font-bold  text-[#bbfe32] text-3xl lg:text-7xl text-center">
          روُيتنا
          </h2>
          <h2 className=" font-black  text-white text-3xl lg:text-3xl text-center mt-4">
         OUR VISION
          </h2>

          <p className=" text-pretty text-white mt-6  text-lg">
          نحن ننشئ حضورًا رقميًا لا يتزعزع يضع عملاءنا في قلب المنافسة، ويمكّنهم من التفوق والهيمنة على السوق الرقمي بقوة لا مثيل لها. نهدف إلى أن نكون الرواد والمصدر الأساسي للإبداع والتحول الرقمي، وبناء جسور بين الحكمة العميقة والاستراتيجية الذكية، مع دمج أحدث التقنيات لتحقيق تأثير ملموس وقوي. رؤيتنا تدور حول تمكين شركائنا للوصول إلى القمة، وتحقيق المجد المستدام، وترك بصمة لا تُنسى في عالم سريع التغير والتطور. نحن نؤمن بأن الابتكار المستمر والتفكير الثاقب هما المفتاح لتشكيل المستقبل، ونسعى جاهدين لجعل كل خطوة إلى الأمام رحلة نحو التميز والقيادة.
          </p>

          
          <p className=" text-pretty text-white mt-6  text-lg direction-ltr text-left">
          We create an unshakable digital presence that places our clients at the heart of the competition, empowering them to excel and dominate the digital market with unmatched strength. We aim to be the pioneers and the primary source of creativity and digital transformation, building bridges between deep wisdom and smart strategy, while integrating the latest technologies to achieve tangible and powerful impact. Our vision revolves around empowering our partners to reach the pinnacle, achieve sustainable glory, and leave an unforgettable mark in a rapidly changing and evolving world. We believe that continuous innovation and insightful thinking are the keys to shaping the future, and we strive to make every step forward a journey toward excellence and leadership.
          </p>
        </div>
      </div>

     
    </div>
  </div>
</section>
   
   
   </>
  );
};

export default AboutUS;
