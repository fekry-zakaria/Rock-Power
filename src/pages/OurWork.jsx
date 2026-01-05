import mission from "../assets/images/mission.jpeg";

const Ourwork = () => {
  return (
    <>
<section>
  <div className=" px-4 pt-6 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className=" font-bold  text-[#bbfe32] text-3xl lg:text-7xl text-center">
            رسالتنا
          </h2>
          <h2 className=" font-black  text-white text-3xl lg:text-3xl text-center mt-4">
          OUR MISSION
          </h2>

          <p className=" text-pretty text-white mt-6  text-lg">
          
            نحن في   <span className="text-[#bbfe32] px-0.5">  روك باور</span>نعمل على تمكين الشركات من خلال حلول مبتكرة وتصميمات احترافية وقدرات رقمية متقدمة وتسويق جريء. نحن نمكن عملاءنا من التفوق في العالم الرقمي من خلال الجمع بين الاستراتيجية الدقيقة والتقنيات المتقدمة، مع التركيز على تعزيز الحضور الرقمي وتحقيق مستويات عالية من الأداء والتنافسية.
          </p>

          <p className=" text-pretty text-white   text-lg">
          نحن نعمل مع عملائنا كشركاء حقيقيين، ونفهم احتياجاتهم بشكل عميق لتقديم حلول مخصصة تدعم نمو أعمالهم في الأسواق التنافسية. عبر استخدام تقنيات التحليل المتقدم، نقدم أفكارًا مبتكرة تؤثر بشكل إيجابي في إستراتيجية التسويق الرقمي، مما يساعد على تعزيز ظهور العلامة التجارية، وزيادة تفاعل الجمهور. في  <span className="text-[#bbfe32] px-0.5">  روك باور</span>، نسعى دائمًا إلى تقديم أعلى مستويات الجودة والاحترافية، ونلتزم بتقديم نتائج تواكب تطلعات عملائنا وتحقق لهم النجاح المستدام.
          </p>

          <p className=" text-pretty text-white mt-6  text-lg direction-ltr text-left">
           
            At <span className="text-[#bbfe32] px-0.5">    Rock Power </span> we work to empower businesses through innovative solutions, professional designs, advanced digital capabilities, and bold marketing. We enable our clients to excel in the digital world by combining precise strategy with advanced technologies, focusing on enhancing digital presence and achieving high levels of performance and competitiveness.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
  {/* Glow */}
  <div className="absolute w-[900px] h-[300px] bg-[#91e30d] opacity-25 blur-[120px] z-0" />

  {/* Image */}
  <img
    src={mission}
    alt="home"
    className=" block max-w-none h-[750px]"
  />
</div>
    </div>
  </div>
</section>
   
   
   </>
  );
};

export default Ourwork;
