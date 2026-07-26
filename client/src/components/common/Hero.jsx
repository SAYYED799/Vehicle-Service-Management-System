import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaCarSide } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-6">
              🚗 Trusted by 5000+ Vehicle Owners
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Smart{" "}
              <span className="text-blue-700">Vehicle Service</span>
              <br />
              Management
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              Book vehicle services online, schedule repairs, track repair
              progress in real time, receive instant mechanic updates, and
              manage your complete vehicle history from one intelligent
              platform.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Book Service
                <FaArrowRight />
              </button>

              <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-gray-600">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Certified Mechanics
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Secure Payments
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Live Tracking
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 shadow-[0_25px_60px_rgba(37,99,235,0.35)] flex justify-center items-center">

                <FaCarSide className="text-white text-[150px] lg:text-[170px] drop-shadow-lg" />

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;