
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
                        <button className="p-2 rounded-full bg-neutural-800/70 hover:bg-neutral-700 
                        text-white transition-all"
                        aria-label="Scroll left"
                        > 
 
                        </button>
                    </div>
                </div>
                
                {/* Movie Slider */}
                <div className="relative">
                    <div className="flex space-x-4 overflow-x-hidden scorllbar-hide pb-4 snap-x">
                        {/* Condtional Rendering */}
                        <div className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer">
                            <div className="rounded-lg overflow-hidden bg-neutral-800">
                                <div className="relative aspect-[2/3]">
                                    <img src="" alt="" className=""/>
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
