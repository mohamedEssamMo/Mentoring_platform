const Contact = () => {
  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold text-center text-headingColor mb-4">
          Contact Us
        </h2>
        <p className="mb-12 text-center text-gray-600 text-lg font-light">
          Have a technical question, feedback, or want to connect with a mentor?
          Fill out the form and we'll get back to you promptly.
        </p>

        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12">
          <form action="#" className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-primaryColor transition-all duration-300"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Let us know how we can help you"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-primaryColor transition-all duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Leave a comment..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primaryColor focus:border-primaryColor transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-primaryColor text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-primaryColor/90 transform hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
