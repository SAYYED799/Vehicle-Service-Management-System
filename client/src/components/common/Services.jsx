import { motion } from "framer-motion";
import {
  FaOilCan,
  FaTools,
  FaCarCrash,
  FaBatteryHalf,
  FaSnowflake,
  FaCar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaOilCan />,
    title: "Oil Change",
    description: "Premium engine oil replacement for smoother performance.",
  },
  {
    icon: <FaTools />,
    title: "Engine Repair",
    description: "Expert diagnosis and repair for all engine issues.",
  },
  {
    icon: <FaCarCrash />,
    title: "Body Repair",
    description: "Professional dent removal and accident restoration.",
  },
  {
    icon: <FaBatteryHalf />,
    title: "Battery Service",
    description: "Battery replacement and complete electrical inspection.",
  },
  {
    icon: <FaSnowflake />,
    title: "AC Service",
    description: "Cooling system inspection, gas refill and AC repair.",
  },
  {
    icon: <FaCar />,
    title: "Full Vehicle Service",
    description: "Complete inspection and servicing to keep your car healthy.",
  },
];

const Services = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-700 font-semibold uppercase tracking-[4px]">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Complete Vehicle Care
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            From routine maintenance to major repairs, our certified mechanics
            ensure your vehicle stays in perfect condition.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-500 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                  text-blue-700
                  mb-6
                  transition-all
                  duration-300
                  group-hover:bg-blue-700
                  group-hover:text-white
                  group-hover:rotate-12
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-8">
                {service.description}
              </p>

              {/* Button */}
              <button
                className="
                  mt-8
                  bg-blue-700
                  hover:bg-blue-800
                  hover:scale-105
                  active:scale-95
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  transition-all
                  duration-300
                "
              >
                Book Now →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;