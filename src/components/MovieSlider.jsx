import { Star} from "lucide-react";


const MovieSlider = () => {
    return (
        <section
            className="py-12" id="">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                        <h2>Title</h2>

                        {/* Conditional Rendering */}
                        <p className="text-neutral-400 text-sm mt-1">Subtitle</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 
                        text-white transition-all"
                            aria-label="Scroll left"
                        >

                        </button>
                    </div>
                </div>

                {/* Movie Slider */}
                <div className="relative">
                    <div className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x">
                        {/* Condtional Rendering */}
                        <div className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer">
                            <div className="rounded-lg overflow-hidden bg-neutral-800">
                                <div className="relative aspect-[2/3]">
                                    <img src="" alt="" className="w-full h-full object-cover transition-all 
                                    duration-300 group-horver:scale-110 group-horver:opacity-35"/>

                                    {/* Hover Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900/90
                                        via-neutral-900/40 to-transparent flex flex-col justify-end p-4
                                        opacity-0 group-hover:opacity-100 transition-all duration-300`}>

                                        <div className="transform translate-y-4 group-hover:translate-y-0 
                                        transition-transform duration-300 space-y-3
                                        ">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                <span className="text-yellow-400 text-sm font-medium">
                                                    Movies Vote Average
                                                </span>
                                            </div>

                                            <div className="flex items-center space-x-1">

                                                <span className="text-neutral-400 text-sm">
                                                    Movies Release Date
                                                </span>
                                            </div>
                                            <button className="w-full bg-red-600 hover:bg-red-700 text-white 
                                            py-3 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* movies Info */}
                            <div className="mt-3">
                                <h3 className="text-whote text-sm font-medium 
                                truncate">Movie Title</h3>
                                <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                             <Star className="w-4 h-4 text-yellow-400  fill-yellow-400" />
                                             <span className="text-neutral-400 text-xs">Movies Vote Average</span>
                                        </div>
                                        <span className="text-neutral-500 text-xs">
                                            Movies Release Date
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieSlider
