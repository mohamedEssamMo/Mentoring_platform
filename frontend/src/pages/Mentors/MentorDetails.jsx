import { useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import MentorAbout from "./MentorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";

const MentorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  const {
    data: mentor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/mentors/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    areaOfExpertise,
    jobTitle,
    hourlyFee,
    links,
    location,
    photo,
  } = mentor;

  console.log(mentor);

  return (
    <section className="py-16 bg-gradient-to-b from-[#f9fafb] to-[#eef2f7] min-h-screen mt-20">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            {/* ----------- Left: Mentor Profile & Tabs ----------- */}
            <div className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              {/* Mentor Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <figure className="relative w-[180px] h-[180px] rounded-full overflow-hidden shadow-xl border border-gray-200 flex-shrink-0 ring-4 ring-[#E0F7FA]">
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </figure>

                <div className="flex flex-col text-center sm:text-left">
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-2">
                    <span className="inline-block bg-[#E0F7FA] text-irisBlueColor py-1 px-5 text-[14px] font-semibold rounded-full shadow-sm">
                      {areaOfExpertise}
                    </span>
                    <span className="inline-block bg-[#E0F7FA] text-irisBlueColor py-1 px-5 text-[14px] font-semibold rounded-full shadow-sm">
                      {jobTitle}
                    </span>
                  </div>

                  <h3 className="text-headingColor text-[26px] lg:text-[30px] font-extrabold tracking-tight flex flex-col sm:flex-row sm:items-center gap-2">
                    {name}
                    {location && (
                      <span className="text-[15px] text-gray-500 font-medium">
                        / {location}
                      </span>
                    )}
                  </h3>

                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <span className="flex items-center gap-1 text-[16px] font-semibold text-headingColor">
                      <img src={starIcon} alt="rating" className="w-5 h-5" />
                      {averageRating}
                    </span>
                    <span className="text-[14px] text-gray-500">
                      ({totalRating})
                    </span>
                  </div>

                  <p className="text-[15px] text-gray-600 leading-relaxed mt-3 max-w-[460px]">
                    {bio}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-gray-200"></div>

              {/* Tabs Section */}
              <div className="flex gap-8 border-b border-gray-200">
                <button
                  onClick={() => setTab("about")}
                  className={`relative py-3 px-2 text-[17px] font-semibold transition-all duration-300 ${
                    tab === "about"
                      ? "text-primaryColor"
                      : "text-headingColor hover:text-primaryColor"
                  }`}
                >
                  About
                  {tab === "about" && (
                    <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-primaryColor rounded-full" />
                  )}
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`relative py-3 px-2 text-[17px] font-semibold transition-all duration-300 ${
                    tab === "feedback"
                      ? "text-primaryColor"
                      : "text-headingColor hover:text-primaryColor"
                  }`}
                >
                  Feedback
                  {tab === "feedback" && (
                    <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-primaryColor rounded-full" />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-10 transition-all duration-300 ease-in-out">
                {tab === "about" && (
                  <MentorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                    links={links}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            {/* ----------- Right: Booking Side Panel ----------- */}
            <div className="self-start sticky top-10">
              <SidePanel
                mentorId={mentor._id}
                hourlyFee={hourlyFee}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorDetails;
