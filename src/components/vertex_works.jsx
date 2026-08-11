function HowVertexWorks() {
  return (
    <section className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-sm text-gray-500">
          🔵 How it works
        </p>
        <h1 className="mt-4 text-6xl font-semibold leading-tight">
          How Vertex
          <br />
          Works
        </h1>
        
        <p className="mt-2 text-gray-400">
          From capture to share in three steps.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4">

          {/* Card 1 */}
          <div className="bg-[#151515] h-[340px] p-6 flex flex-col justify-between">
            <p className="text-gray-400 text-sm">01</p>

            <div>
              <h3 className="text-2xl font-medium">
                Capture anything
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Screenshot your full screen, a window, or draw a
                custom region. One shortcut, instant result.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#151515] h-[340px] p-6 flex flex-col justify-between">
            <p className="text-gray-400 text-sm">02</p>

            <div>
              <h3 className="text-2xl font-medium">
                Annotate in seconds
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Add arrows, text, shapes, and highlights directly
                on your capture. No separate editor needed.
              </p>
            </div>
          </div>


          <div className="bg-[#151515] h-[340px] p-6 flex flex-col justify-between">
            <p className="text-gray-400 text-sm">03</p>

            <div>
              <h3 className="text-2xl font-medium">
                Share with one click
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Copy a link, save to your drive, or send straight
                to your team. Your capture is ready.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HowVertexWorks;