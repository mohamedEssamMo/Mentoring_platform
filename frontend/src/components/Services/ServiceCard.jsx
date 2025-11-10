import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    // Card Container: Added border, shadow, and hover effect
    <div className="py-[30px] px-4 lg:px-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Service Name */}
      <h2 className="text-[24px] lg:text-[26px] leading-9 text-headingColor font-extrabold mb-3">
        {name}
      </h2>

      {/* Service Description */}
      <p className="text-[16px] leading-7 font-normal text-textColor">{desc}</p>

      {/* Footer (Link and Number) */}
      <div className="flex items-center justify-between mt-8">
        {/* Link Button (Circular) */}
        <Link
          to="/doctors"
          className="w-11 h-11 **rounded-full** border border-solid border-gray-300 **text-textColor**
            flex items-center justify-center group **hover:bg-primaryColor hover:border-primaryColor** transition-all duration-200"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-6" />
        </Link>

        {/* Number Indicator (Circular with consistent styling) */}
        <span
          className="w-11 h-11 flex items-center justify-center text-[18px] leading-7 font-bold **rounded-full**"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            // Removed custom border radius to use rounded-full class above
            // You can re-add if the original "6px 0 0 6px" style is desired
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
