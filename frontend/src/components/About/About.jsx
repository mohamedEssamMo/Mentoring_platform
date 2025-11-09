import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About mentorship" />
            <div
              className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] 
              md:right-[-7%] lg:right-[22%]"
            >
              <img src={aboutCardImg} alt="Mentor card" />
            </div>
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Proud to be one of the leading mentorship platforms
            </h2>
            <p className="text__para">
              For over a decade, <strong>Mentorship</strong> has connected
              students with experienced teachers and industry professionals.
              Thousands of learners have built their confidence, improved their
              skills, and reached new goals through personalized learning.
            </p>
            <p className="text__para mt-[30px]">
              Every day, our mentors strive to inspire, teach, and guide
              learners — not just to pass exams, but to achieve real success in
              their academic and career paths. We believe education is more than
              lessons; it’s a lifelong journey.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
