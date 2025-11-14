import { Star, ArrowRight } from "lucide-react";

const GenreSection = () => {
    return (
        <section className=" py-12 bg-neutral-900/50" id="">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Browse by Genre
                </h2>

                {/* Genre Tabs */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                        {/* Conditional Rendering */}
                        <button className="px-4 py-2 rounded-md transition-colors text-white text-sm">
                            Genre Name
                        </button>
                    </div>
                </div>

           <div className="h-64 flex items-center justify-center ">
                    <div className="animate-pulse">
                        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                </div>

                {/* Else */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Map Method */}
                    <div className="group cursor-pointer">
                        <div className="relative rounded-lg overflow-hidden bg-neutral-800">
                            <div className="aspect-[2/3]">
                                <img
                                    src=""
                                    alt=""
                                    className="w-full h-full object-cover transition-all 
              duration-300 group-hover:scale-110 group-hover:opacity-40"
                              
                                />

                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-neutral-900/90
              via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100
              transition-all duration-300 flex flex-col justify-end p-4"

                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="text-yellow-400 text-sm font-medium">
                                                Movie Vote Average
                                            </span>
                                        </div>

                                        <span className="text-neutral-400 text-sm">
                                            Movie Release Date
                                        </span>
                                    </div>

                                    <button
                                        className="w-full bg-red-600 hover:bg-red-700 text-white
                py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm"
                                    >
                                        
                                        <ArrowRight className="w-4 h-4" />
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenreSection
