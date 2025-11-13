
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
                        text-white transition-all"> 
 
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MovieSlider
