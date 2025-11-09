import heroImg01 from "../assets/images/mentor1.png";
import heroImg02 from "../assets/images/mentor2.png";
import heroImg03 from "../assets/images/mentor3.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About.jsx";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Empower your learning with expert mentors
                </h1>
                <p className="text__para">
                  Learn with top educators and mentors across various fields.
                  Build your skills, connect with professionals, and grow your
                  potential anytime, anywhere.
                </p>
                <button className="btn">Find a Mentor</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    50+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Professional Mentors</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Subjects & Fields</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Student Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto text-center">
            <h2 className="heading">Explore Our Mentorship Services</h2>
            <p className="text__para">
              Get access to personalized learning, professional coaching, and
              practical skill-building with our expert mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 text-center">
              <img src={icon01} alt="" className="mx-auto" />
              <h2 className="text-[26px] font-[700] text-headingColor mt-[30px]">
                Find Your Mentor
              </h2>
              <p className="text-[16px] text-textColor mt-4">
                Browse hundreds of professional mentors ready to help you in
                your educational or career journey.
              </p>
              <Link
                to="/mentors"
                className="w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>

            <div className="py-[30px] px-5 text-center">
              <img src={icon02} alt="" className="mx-auto" />
              <h2 className="text-[26px] font-[700] text-headingColor mt-[30px]">
                Join a Session
              </h2>
              <p className="text-[16px] text-textColor mt-4">
                Participate in live sessions or recorded classes designed to
                boost your knowledge and confidence.
              </p>
              <Link
                to="/sessions"
                className="w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>

            <div className="py-[30px] px-5 text-center">
              <img src={icon03} alt="" className="mx-auto" />
              <h2 className="text-[26px] font-[700] text-headingColor mt-[30px]">
                Book a Session
              </h2>
              <p className="text-[16px] text-textColor mt-4">
                Choose your time, book your mentor, and start improving your
                skills today.
              </p>
              <Link
                to="/book"
                className="w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Learning Paths */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading">Popular Learning Paths</h2>
            <p className="text__para">
              Choose the learning track that suits your goals — from web
              development to design, business, and more.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Virtual Mentorship Feature */}
      <section>
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Learn anytime, anywhere with live mentorship
            </h2>
            <ul className="pl-4">
              <li className="text__para">1. Connect instantly with mentors.</li>
              <li className="text__para">
                2. Book lessons that fit your schedule.
              </li>
              <li className="text__para">
                3. Get feedback and grow faster with expert guidance.
              </li>
            </ul>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>

          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4" alt="" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-3 rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="text-[14px] font-[600] text-headingColor">
                    Tue, 24
                  </p>
                  <p className="text-[14px] font-[400] text-textColor">
                    10:00AM
                  </p>
                </div>
                <span className="w-[34px] h-[34px] flex items-center justify-center bg-yellowColor rounded">
                  <img src={videoIcon} alt="" />
                </span>
              </div>
              <div className="w-[96px] bg-[#CCF0F3] py-1 px-2 text-[12px] text-irisBlueColor font-[500] mt-4 rounded-full">
                Live Session
              </div>
              <div className="flex items-center gap-[10px] mt-[18px]">
                <img src={avatarIcon} alt="" />
                <h4 className="text-[16px] font-[700] text-headingColor">
                  Sarah Johnson
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading">Meet Our Mentors</h2>
            <p className="text__para">
              Learn from the best educators and industry experts who are ready
              to guide you.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Common questions by learners</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading">What our students say</h2>
            <p className="text__para">
              Hear stories from learners who grew their skills with mentorship.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
