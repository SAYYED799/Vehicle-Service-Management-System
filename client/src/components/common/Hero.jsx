const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center bg-slate-100 text-center px-6">
      <h1 className="text-6xl font-bold text-blue-700">
        Smart Vehicle Service Management
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Book vehicle services online, track repairs in real time,
        and manage your service history—all from one platform.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg">
          Book Service
        </button>

        <button className="border px-8 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;