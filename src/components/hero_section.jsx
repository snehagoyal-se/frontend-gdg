import mountainImage from "../assets/Screenshot 2026-08-07 231922.png"
function Hero(){
    return(
        <section className="bg-black text-white">
            <div className="max-w-7xl mx-auto flex justify-center px-6 py-20">
                <div className="flex flex-col items-center fade-up">
                    <p className="text-sm text-gray-400">
                        🔵 Join over 10k+ users
                    </p>
                    <h1 className="mt-6 text-6xl font-semibold leading-tight">
                        Vertex-Screen
                        <br/>
                        capture, reimagined
                    </h1>
                    <p className="mt-6 max-w-xl text-gray-400">
                        Screenshot, annotate, and share in seconds.No friction, no clutter
                    </p>
                    <div className="mt-8 flex gap-4">
                        <button className="bg-white  text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition cursor-pointer transition-all duration-300 hover:shadow-xl">
                            Download for free
                        </button>
                        <button className="bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium  hover:bg-zinc-800 transition cursor-pointer transition-all duration-300 hover:shadow-xl">
                            See Features
                        </button>
                    </div>
                    <img src={mountainImage}
                    alt="Hero"
                    className="mt-16 rounded-xl shadow-2xl float-animation"
                    />
                    <p className="mt-8 text-sm text-gray-500">
                        Trusted by thousands of businesses
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-14 text-gray-600 font-medium">
                        < p>Galileo</p>
                        <p>Capsule</p>
                        <p>Lumon</p>
                        <p>Acme Co.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;