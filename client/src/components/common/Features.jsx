import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaMapMarkedAlt,
  FaTools,
  FaHistory,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarCheck />,
    title: "Easy Booking",
    description:
      "Book vehicle services online in just a few clicks anytime.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Live Tracking",
    description:
      "Track your vehicle service progress in real time.",
  },
  {
    icon: <FaTools />,
    title: "Expert Mechanics",
    description:
      "Certified professionals ensure quality repairs every time.",
  },
  {
    icon: <FaHistory />,
    title: "Service History",
    description:
      "Access complete maintenance records whenever you need.",
  },
  {
    icon: <FaCreditCard />,
    title: "Secure Payments",
    description:
      "Multiple secure payment methods with instant invoices.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our support team is always available to help you.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Why Choose AutoCare Pro?
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Experience smarter vehicle servicing with advanced tracking,
            professional mechanics, secure payments, and complete service
            management—all in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
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
  scale: 1.05,
}}
              
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;