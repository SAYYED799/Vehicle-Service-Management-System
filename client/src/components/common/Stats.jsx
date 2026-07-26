import { motion } from "framer-motion";
import { FaUsers, FaCar, FaTools, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={32} />,
    number: "5000+",
    title: "Happy Customers",
  },
  {
    icon: <FaCar size={32} />,
    number: "1200+",
    title: "Vehicles Serviced",
  },
  {
    icon: <FaTools size={32} />,
    number: "50+",
    title: "Expert Mechanics",
  },
  {
    icon: <FaStar size={32} />,
    number: "4.9★",
    title: "Customer Rating",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
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
              className="bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                {item.icon}
              </div>

              <h2 className="text-4xl font-extrabold text-gray-900">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-500">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;