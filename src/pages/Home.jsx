import home from "../assets/images/home.png";
const Home = () => {
  return (
   <>
<section>
  <div className=" px-4 pt-6 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className=" font-bold  text-[#bbfe32] text-3xl lg:text-7xl text-center">
            من نحن
          </h2>
          <h2 className=" font-black  text-white text-3xl lg:text-3xl text-center mt-4">
          WHO WE ARE
          </h2>

          <p className=" text-pretty text-white mt-6  text-lg">
            <span className="text-[#bbfe32] px-0.5">  روك باور</span>
             هي شركة رائدة في مجال التحول الرقمي والتسويق الالكتروني تاسست لتقديم حلول مبتكرة ومتطورة تُحدث فارقاً في عالم الاعمال . نحن متخصصون في تصميم وتنفيذ استراتيجيات تسويقية رقمية متكاملة ، تدمج بين الابداع ، التكنولوجيا ، والبيانات لتحقيق نتائج متميزة وقابلة للقياس
          </p>

          <p className=" text-pretty text-white   text-lg">
          نحن نعمل مع عملائنا كشركاء حقيقيين، ونفهم احتياجاتهم بشكل عميق لتقديم حلول مخصصة تدعم نمو أعمالهم في الأسواق التنافسية. عبر استخدام تقنيات التحليل المتقدم، نقدم أفكارًا مبتكرة تؤثر بشكل إيجابي في إستراتيجية التسويق الرقمي، مما يساعد على تعزيز ظهور العلامة التجارية، وزيادة تفاعل الجمهور. في  <span className="text-[#bbfe32] px-0.5">  روك باور</span>، نسعى دائمًا إلى تقديم أعلى مستويات الجودة والاحترافية، ونلتزم بتقديم نتائج تواكب تطلعات عملائنا وتحقق لهم النجاح المستدام.
          </p>

          <p className=" text-pretty text-white mt-6  text-lg direction-ltr text-left">
            <span className="text-[#bbfe32] px-0.5">    Rock Power </span>
           is a leading company in the field of digital transformation and online marketing, established to provide innovative and advanced solutions that make a real difference in the business world. We specialize in designing and implementing comprehensive digital marketing strategies that integrate creativity, technology, and data to achieve outstanding and measurable results.

We work with our clients as true partners, deeply understanding their needs to deliver tailored solutions that support their business growth in competitive markets. Through the use of advanced analytics techniques, we offer innovative ideas that positively impact digital marketing strategies, helping to enhance brand visibility and increase audience engagement. At <span className="text-[#bbfe32] px-0.5">    Rock Power </span>, we always strive to deliver the highest levels of quality and professionalism, and we are committed to delivering results that align with our clients' aspirations and ensure their sustainable success.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
  {/* Glow */}
  <div className="absolute w-[900px] h-[300px] bg-[#91e30d] opacity-25 blur-[120px] z-0" />

  {/* Image */}
  <img
    src={home}
    alt="home"
    className="block h-[750px]"
  />
</div>
    </div>
  </div>
</section>
   
   
   </>
  );
};

export default Home;

