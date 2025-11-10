import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import studentAvatar from "../../assets/images/patient-avatar.png"; // تقدر تغير الصورة بعدين لو عندك صور Mentors
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {/* Student 1 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-xl **border border-solid border-gray-100** **shadow-lg** **hover:shadow-xl transition-all duration-300** bg-white">
            <div className="flex items-center gap-[13px]">
              {/* Enhanced Avatar Style: Circular border and rounded image */}
              <img
                src={studentAvatar}
                alt="student"
                className="w-[60px] h-[60px] rounded-full object-cover border-2 border-primaryColor"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-bold text-headingColor">
                  Sarah Ahmed
                </h4>
                <div className="flex items-center gap-[2px] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
            {/* Added a divider for visual separation */}
            <hr className="my-4 border-gray-100" />
            <p className="text-[16px] leading-7 mt-4 **text-gray-700** font-[400] italic">
              “I joined Mentorship to improve my programming skills. My mentor
              was patient, friendly, and explained everything clearly — now I’m
              more confident in my projects!”
            </p>
          </div>
        </SwiperSlide>

        {/* Student 2 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-xl border border-solid border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={studentAvatar}
                alt="student"
                className="w-[60px] h-[60px] rounded-full object-cover border-2 border-primaryColor"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-bold text-headingColor">
                  Mohamed Youssef
                </h4>
                <div className="flex items-center gap-[2px] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-100" />
            <p className="text-[16px] leading-7 mt-4 text-gray-700 font-[400] italic">
              “The mentorship sessions helped me a lot in preparing for my
              design career. The feedback I got was amazing and practical!”
            </p>
          </div>
        </SwiperSlide>

        {/* Student 3 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-xl border border-solid border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={studentAvatar}
                alt="student"
                className="w-[60px] h-[60px] rounded-full object-cover border-2 border-primaryColor"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-bold text-headingColor">
                  Amina Salah
                </h4>
                <div className="flex items-center gap-[2px] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-100" />
            <p className="text-[16px] leading-7 mt-4 text-gray-700 font-[400] italic">
              “I learned data analysis through Mentorship. My mentor guided me
              step by step — I even got an internship afterward!”
            </p>
          </div>
        </SwiperSlide>

        {/* Student 4 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-xl border border-solid border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={studentAvatar}
                alt="student"
                className="w-[60px] h-[60px] rounded-full object-cover border-2 border-primaryColor"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-bold text-headingColor">
                  Karim Hassan
                </h4>
                <div className="flex items-center gap-[2px] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-100" />
            <p className="text-[16px] leading-7 mt-4 text-gray-700 font-[400] italic">
              “Mentorship changed my perspective on learning. It’s not just
              lessons — it’s a complete growth experience with real mentors!”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
