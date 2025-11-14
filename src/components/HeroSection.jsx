import { Star, PlayCircle, Plus } from "lucide-react";


const HeroSection = () => {
    return (
          <div className="relative w-full h-screen">
      {/* Movies Backdrop */}
      <div className="absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Movies info */}
          <div className="transition-all duration-700">

            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-red-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                FEATURED
              </span>

              {/* Conditional Rendering */}
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white">Moving Voting Average</span>
              </div>
              {/* Conditional Rendering Close */}

              <span className="text-neutral-400">.</span>
              <span className="text-neutral-300 text-sm">Movies Release Date</span>

              {/* Conditional Rendering */}
              <>
                <span className="text-neutral-400">.</span>
                <span className="bg-neutral-700 text-neutral-300 text-xs px-6 py-0.5">
                  18+
                </span>
              </>
              {/* Conditional Rendering Close */}
            </div>


            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Movies Title
            </h1>

            <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4">
              Movie Overview
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                <PlayCircle className="w-5 h-5" />
                Watch Now
              </button>

              <button
                className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg 
                                flex items-center gap-2 transition-all border border-neutral-600"
              >
                <Plus className="w-5 h-5" />
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {/* Conditional Rendering */}
        <button className={`h-1.5 rounded-full transition-all`} />
      </div>
    </div>
    )
}

export default HeroSection
