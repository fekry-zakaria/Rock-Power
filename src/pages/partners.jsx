import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import p9 from "../assets/images/p9.jpg";
import p10 from "../assets/images/p10.jpg";
import p11 from "../assets/images/p11.jpg";
import p12 from "../assets/images/p12.jpg";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";
import s7 from "../assets/images/s7.jpg";
import s8 from "../assets/images/s8.jpg";
import s9 from "../assets/images/s9.jpg";
import s10 from "../assets/images/s10.jpg";
import s11 from "../assets/images/s11.jpg";
import s12 from "../assets/images/s12.jpg";
import m1 from "../assets/images/m1.jpg";
import m2 from "../assets/images/m2.jpg";
import m3 from "../assets/images/m3.jpg";
import m4 from "../assets/images/m4.jpg";
import m5 from "../assets/images/m5.jpg";
import m6 from "../assets/images/m6.jpg";
import m7 from "../assets/images/m7.jpg";
import m8 from "../assets/images/m8.jpg";
import m9 from "../assets/images/m9.jpg";
import m10 from "../assets/images/m10.jpg";
import m11 from "../assets/images/m11.jpg";
import m12 from "../assets/images/m12.jpg"
import f1 from "../assets/images/f1.jpg";
import f2 from "../assets/images/f2.jpg";
import f3 from "../assets/images/f3.jpg";
import f4 from "../assets/images/f4.jpg";
import f5 from "../assets/images/f5.jpg";
import f6 from "../assets/images/f6.jpg";
import f7 from "../assets/images/f7.jpg";
import f8 from "../assets/images/f8.jpg";
import f9 from "../assets/images/f9.jpg";
import f10 from "../assets/images/f10.jpg";
import f11 from "../assets/images/f11.jpg";
import f12 from "../assets/images/f12.jpg"

import n1 from "../assets/images/n1.jpg";
import n2 from "../assets/images/n2.jpg";
import n3 from "../assets/images/n3.jpg";
import n4 from "../assets/images/n4.jpg";
import n5 from "../assets/images/n5.jpg";
import n6 from "../assets/images/n6.jpg";
import n7 from "../assets/images/n7.jpg";
import n8 from "../assets/images/n8.jpg";
import n9 from "../assets/images/n9.jpg";
import n10 from "../assets/images/n10.jpg";
import n11 from "../assets/images/n11.jpg";
import n12 from "../assets/images/n12.jpg"

import x1 from "../assets/images/x1.jpg";
import x2 from "../assets/images/x2.jpg";
import x3 from "../assets/images/x3.jpg";
import x4 from "../assets/images/x4.jpg";
import x5 from "../assets/images/x5.jpg";
import x6 from "../assets/images/x6.jpg";
import x7 from "../assets/images/x7.jpg";
import x8 from "../assets/images/x8.jpg";
import x9 from "../assets/images/x9.jpg";
import x10 from "../assets/images/x10.jpg";
import x11 from "../assets/images/x11.jpg";
import x12 from "../assets/images/x12.jpg"
import logoPartners from "../assets/images/logoPartners.jpg";
import logoPartnersLeft from "../assets/images/logoPartnersLeft.jpg";

const Partners = () => {
  return (
    <>
      {/* 🔴 LOGO LEFT FIXED */}
      <div className="fixed top-1/2 -translate-y-1/2 left-0 z-50">
        <div className=" flex items-center justify-center shadow-lg">
          <img
            src={logoPartnersLeft}
            alt=""
            className=" h-70 object-contain rounded-br-2xl rounded-tr-2xl"
          />
        </div>
      </div>

      {/* 🔴 LOGO RIGHT FIXED */}
      <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50">
      <div className=" flex items-center justify-center shadow-lg">
          <img
            src={logoPartners}
            alt=""
            className=" h-70 object-contain rounded-bl-2xl rounded-tl-2xl"
          />
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="flex items-center justify-center mt-25">
        <div className="max-w-prose">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

            {[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12].map((img, i) => (
              <div
                key={i}
                className="h-32 w-32 rounded-[20px] bg-[#F1F1F1] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

       {/* ================= GRID ================= */}
      <div className="flex items-center justify-center mt-29">
        <div className="max-w-prose">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

            {[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12].map((img, i) => (
              <div
                key={i}
                className="h-32 w-32 rounded-[20px] bg-[#F1F1F1] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      
       {/* ================= GRID ================= */}
       <div className="flex items-center justify-center mt-29">
        <div className="max-w-prose">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

            {[f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12].map((img, i) => (
              <div
                key={i}
                className="h-32 w-32 rounded-[20px] bg-[#F1F1F1] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      
       {/* ================= GRID ================= */}
       <div className="flex items-center justify-center mt-29">
        <div className="max-w-prose">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

            {[m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12].map((img, i) => (
              <div
                key={i}
                className="h-32 w-32 rounded-[20px] bg-[#F1F1F1] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="flex items-center justify-center mt-29">
        <div className="max-w-prose">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

            {[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12].map((img, i) => (
              <div
                key={i}
                className="h-32 w-32 rounded-[20px] bg-[#F1F1F1] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

         {/* ================= GRID ================= */}
         <div className="flex items-center justify-center mt-29 mb-30">
        <div className="max-w-prose">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

            {[x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12].map((img, i) => (
              <div
                key={i}
                className="h-32 w-32 rounded-[20px] bg-[#F1F1F1] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
