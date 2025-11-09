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
          <div className="py-[30px] px-5 rounded-[13px] shadow-md bg-white">
            <div className="flex items-center gap-[13px]">
              <img src={studentAvatar} alt="student" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Sarah Ahmed
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “I joined Mentorship to improve my programming skills. My mentor
              was patient, friendly, and explained everything clearly — now I’m
              more confident in my projects!”
            </p>
          </div>
        </SwiperSlide>

        {/* Student 2 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px] shadow-md bg-white">
            <div className="flex items-center gap-[13px]">
              <img src={studentAvatar} alt="student" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Mohamed Youssef
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “The mentorship sessions helped me a lot in preparing for my
              design career. The feedback I got was amazing and practical!”
            </p>
          </div>
        </SwiperSlide>

        {/* Student 3 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px] shadow-md bg-white">
            <div className="flex items-center gap-[13px]">
              <img src={studentAvatar} alt="student" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Amina Salah
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “I learned data analysis through Mentorship. My mentor guided me
              step by step — I even got an internship afterward!”
            </p>
          </div>
        </SwiperSlide>

        {/* Student 4 */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px] shadow-md bg-white">
            <div className="flex items-center gap-[13px]">
              <img src={studentAvatar} alt="student" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Karim Hassan
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
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
