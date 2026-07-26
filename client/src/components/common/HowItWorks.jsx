import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaCarSide,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardCheck />,
    title: "Book a Service",
    description:
      "Choose your preferred service and schedule an appointment online.",
  },
  {
    icon: <FaCarSide />,
    title: "Vehicle Inspection",
    description:
      "Our experts inspect your vehicle and identify any required repairs.",
  },
  {
    icon: <FaTools />,
    title: "Repair & Maintenance",
    description:
      "Certified mechanics perform quality repairs using genuine parts.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Delivery & Tracking",
    description:
      "Track your service status and receive your vehicle after completion.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
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
            Process
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            How It Works
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Booking your vehicle service is quick, simple and completely
            transparent.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-500 transition-all duration-300 w-72 text-center"
              >
                {/* Icon */}
                <div
                  className="
                    w-20 h-20
                    rounded-full
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    text-4xl
                    text-blue-700
                    mx-auto
                    mb-6
                    transition-all
                    duration-300
                    group-hover:bg-blue-700
                    group-hover:text-white
                    group-hover:rotate-12
                  "
                >
                  {step.icon}
                </div>

                <p className="text-blue-700 font-bold mb-3">
                  Step {index + 1}
                </p>

                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center px-4">
                  <FaArrowRight className="text-3xl text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;