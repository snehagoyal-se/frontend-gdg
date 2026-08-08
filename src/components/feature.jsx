function FeatureSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <p>Features</p>
          </div>

          <h2 className="mt-4 text-5xl font-semibold">
            Explore different features
          </h2>

          <p className="mt-3 text-gray-400">
            Every feature is designed to get out of your way.
          </p>

        </div>

      </div>
    </section>
  );
}

export default FeatureSection;