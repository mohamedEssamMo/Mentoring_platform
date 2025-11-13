import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import FeedbackForm from "./FeedbackForm";

// eslint-disable-next-line react/prop-types
const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  console.log(reviews);

  return (
    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300">
      {/* Header */}
      <div className="mb-10 text-center">
        <h4 className="text-[22px] md:text-[24px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
          All Reviews ({totalRating})
        </h4>
        <div className="mt-2 h-[2px] w-16 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </div>

      {/* Reviews List */}
      {reviews?.length > 0 ? (
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl p-5 flex justify-between items-start gap-6 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              {/* Reviewer Info */}
              <div className="flex gap-4">
                <figure className="w-12 h-12 rounded-full overflow-hidden border border-cyan-400/30 flex-shrink-0 shadow-[0_0_10px_rgba(56,189,248,0.25)]">
                  <img
                    src={review?.user?.photo || avatar}
                    alt={review?.user?.name || "User"}
                    className="w-full h-full object-cover rounded-full"
                  />
                </figure>

                <div>
                  <h5 className="text-[17px] font-semibold text-cyan-900 leading-6">
                    {review?.user?.name}
                  </h5>
                  <p className="text-[13px] text-gray-600 leading-5 mb-2">
                    {formateDate(review?.createdAt)}
                  </p>
                  <p className="text-[15px] font-medium text-gray-500 leading-7 tracking-wide">
                    {review?.reviewText}
                  </p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(review?.rating || 0).keys()].map((_, idx) => (
                  <AiFillStar
                    key={idx}
                    className="text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-[15px] italic mt-8">
          No reviews yet.
        </p>
      )}

      {/* Feedback Form Toggle */}
      <div className="mt-10 text-center">
        {showFeedbackForm ? (
          <FeedbackForm />
        ) : (
          <button
            onClick={() => setShowFeedbackForm(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-[15px] tracking-wide hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Give Feedback
          </button>
        )}
      </div>
    </div>
  );
};

export default Feedback;
