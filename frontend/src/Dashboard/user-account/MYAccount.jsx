import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");
  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10 mt-16">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMassage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            {/* Left Panel */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center">
              <figure className="w-[120px] h-[120px] rounded-full border-2 border-primaryColor overflow-hidden shadow-sm">
                <img
                  src={userData.photo || "/default-user.png"}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {userData.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{userData.email}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Specialization:{" "}
                  <span className="text-gray-800 font-semibold">
                    {userData.areaOfExpertise}
                  </span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Job Title:{" "}
                  <span className="text-gray-800 font-semibold">
                    {userData.jobTitle}
                  </span>
                </p>
              </div>

              <div className="mt-8 w-full flex flex-col gap-3">
                <button
                  onClick={handleLogout}
                  className="w-full bg-gray-900 p-3 rounded-lg text-white text-base font-medium hover:bg-gray-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="md:col-span-2">
              <div className="flex gap-4 border-b border-gray-200">
                <button
                  onClick={() => setTab("bookings")}
                  className={`px-5 py-2 rounded-t-lg font-semibold transition-colors ${
                    tab === "bookings"
                      ? "bg-primaryColor text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab("settings")}
                  className={`px-5 py-2 rounded-t-lg font-semibold transition-colors ${
                    tab === "settings"
                      ? "bg-primaryColor text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Profile Settings
                </button>
              </div>

              <div className="mt-6 bg-white rounded-2xl p-6 shadow-md">
                {tab === "bookings" && <MyBookings />}
                {tab === "settings" && <Profile user={userData} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
