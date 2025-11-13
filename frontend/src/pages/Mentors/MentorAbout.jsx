import { formateDate } from "../../utils/formateDate";

const MentorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* --- About Section --- */}
      <div className="relative group">
        <h3 className="text-[22px] leading-[32px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-irisBlueColor to-cyan-500 font-extrabold text-[26px] leading-9 ml-2">
            {name}
          </span>
        </h3>
        <p className="text__para mt-4 text-textColor/90 leading-7 tracking-wide group-hover:text-textColor transition-all duration-300">
          {about}
        </p>

        <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-irisBlueColor to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* --- Education Section --- */}
      <div className="relative">
        <h3 className="text-[22px] leading-[32px] font-semibold text-headingColor mb-6 flex items-center gap-2">
          🎓 <span>Education</span>
        </h3>

        <ul className="space-y-6">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <span className="text-cyan-400 text-[15px] font-semibold tracking-wide">
                    {formateDate(item.startingDate)} —{" "}
                    {formateDate(item.endingDate)}
                  </span>
                  <p className="text-[17px] font-semibold text-textColor mt-1">
                    {item.degree}
                  </p>
                </div>
                <p className="text-[15px] text-gray-400 mt-2 sm:mt-0 italic">
                  {item.university}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Experience Section --- */}
      <div className="relative">
        <h3 className="text-[22px] leading-[32px] font-semibold text-headingColor mb-6 flex items-center gap-2">
          💼 <span>Experience</span>
        </h3>

        <ul className="grid sm:grid-cols-2 gap-6">
          {experiences?.map((item, index) => (
            <li
              key={index}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/70 border border-white/10 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300"
            >
              <span className="text-cyan-400 text-[15px] font-semibold block mb-2">
                {formateDate(item.startingDate)} —{" "}
                {formateDate(item.endingDate)}
              </span>
              <p className="text-[17px] font-semibold text-white leading-6">
                {item.position}
              </p>
              <p className="text-[15px] text-gray-400 leading-5 italic">
                {item.company}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MentorAbout;
