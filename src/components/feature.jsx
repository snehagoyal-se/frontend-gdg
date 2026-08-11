import image from "../assets/Screenshot 2026-08-11 162403.png"
import feature2 from "../assets/Screenshot 2026-08-11 162609.png"
import feature3 from "../assets/Screenshot 2026-08-11 223638.png"
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

        {/* Cards */}
        <div className="mt-12 grid grid-cols-3 gap-2">

          {/* Feature 1 */}
          <div>
            <img
              src={image}
              alt="Scrolling capture"
              className="w-full h-[225px] object-cover"
            />

            <h3 className="mt-4 text-lg font-medium">
              Scrolling capture
            </h3>

            <p className="mt-2 text-sm leading-5 text-gray-400">
              Capture entire pages, long documents, or infinite
              scroll feeds in a single clean screenshot. No more
              stitching images together.
            </p>
          </div>


          {/* Feature 2 */}
          <div>
            <img
              src={feature2}
              alt="Annotation tools"
              className="w-full h-[225px] object-cover"
            />

            <h3 className="mt-4 text-lg font-medium">
              Annotation tools
            </h3>

            <p className="mt-2 text-sm leading-5 text-gray-400">
              A focused set of tools — arrows, callouts, blur,
              and text — designed to communicate clearly without
              the overhead of a full design app.
            </p>
          </div>



          {/* Feature 3 */}
          <div>
            <img
              src={feature3}
              alt="Instant shareable links"
              className="w-full h-[225px] object-cover"
            />

            <h3 className="mt-4 text-lg font-medium">
              Instant shareable links
            </h3>

            <p className="mt-2 text-sm leading-5 text-gray-400">
              Every capture gets its own link the moment it's
              taken. Copy, paste, done. No account required for
              the recipient.
            </p>
          </div>

      </div>
      </div>
    </section>
  );
}

export default FeatureSection;