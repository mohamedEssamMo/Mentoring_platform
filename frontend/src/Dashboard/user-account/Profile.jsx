import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import uploadImageToCloudinary from "../../utils/uploadCloudinary"
import { BASE_URL, token } from "../../config";
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'


const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType:"",
  });

  const navigate = useNavigate()

useEffect(() => {
  if (user) {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      photo: user.photo || "",
      gender: user.gender || "",
      bloodType: user.bloodType || "",
    });
  }
}, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // otherwise handle text/select inputs
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    try {
      const data = await uploadImageToCloudinary(file);
      setSelectedFile(data.url);
      setFormData({...formData, photo:data.url})


    } catch (err) {
      console.error("Upload failed:", err.message);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(formData)
      })

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/users/profile/me')

    } catch (e ) {
      toast.error(e.message)
      setLoading(false)
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* Name */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            readOnly
            aria-readonly
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
          />
        </div>

        {/* blood */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            required
          />
        </div>

        {/* Role & Gender */}
        <div className="mb-5 flex items-center justify-between w-full">

          <label className="text-headingColor font-bold text-[16px] leading-7 flex-1 text-right">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        {/* Avatar Upload */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
            <img
              src={formData.photo}
              alt="profilePic"
              className="w-full h-full rounded-full object-cover"
            />
          </figure>}

          <div className="relative w-[160px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg,.png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-[15px] leading-6 bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer"
            >
              {selectedFile ? selectedFile.name : "Upload photo"}
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
          >
            { loading ? <HashLoader size={25} color="#ffffff"/> : "update Profile" }
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile