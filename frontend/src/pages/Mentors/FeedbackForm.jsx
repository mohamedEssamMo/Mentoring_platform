import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Rating & Review fields are required");
      }

      const res = await fetch(`${BASE_URL}/mentors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      setLoading(false);
      toast.success(result.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmitReview}
      className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Rating Section */}
      <div>
        <h3 className="text-headingColor dark:text-white text-[18px] font-semibold mb-4 flex items-center gap-2">
          How would you rate the overall experience? ✨
        </h3>

        <div className="flex items-center gap-2 mb-6">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`transition-transform duration-200 ${
                  index <= (hover || rating)
                    ? "text-yellow-400 scale-110"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[28px] cursor-pointer hover:scale-125`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Textarea */}
      <div className="mt-[20px]">
        <h3 className="text-headingColor dark:text-white text-[18px] font-semibold mb-3">
          Share your feedback or suggestions 💬
        </h3>

        <textarea
          name="feedback"
          id="feedbackTextarea"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryColor/50 focus:border-primaryColor transition-all duration-200"
          rows="5"
          placeholder="Write your message..."
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        className="mt-6 w-full sm:w-auto bg-primaryColor text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-primaryColor/90 active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-primaryColor/40"
        type="submit"
      >
        {loading ? <HashLoader size={25} color="#fff" /> : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedbackForm;
