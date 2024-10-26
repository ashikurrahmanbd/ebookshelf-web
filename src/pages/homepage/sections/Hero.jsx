import Button from "../../../components/button/Button"


const Hero = () => {

    

    return (
        <div className={`hero min-h-[500px] w-full bg-left-top bg-cover flex items-center justify-center`}>

            <div className="container mx-auto px-4 sm:px-1">
                <div className="hero-elements text-center">

                    <div className="hero-content text-center flex flex-col items-center">
                        <h2 className="text-[45px] text-white font-bold mb-4">Welcome to eBook Shelf</h2>
                        <p className="text-white w-[98%] sm:w-[75%] mb-8">
                            {
                                `your ultimate online platform for discovering and reading a vast collection of eBooks! Our user-friendly interface allows you to effortlessly browse through the latest titles, bestsellers, and hidden gems across various genres. Whether you're a fan of fiction, non-fiction, or academic literature, eBook Shelf offers personalized recommendations to suit your reading preferences.`
                            }
                        </p>
                        <div className="hero-cta flex gap-4 items-center">
                            <Button title="Browse Books" navigateTo="/about-us"  />
                            <Button title="Contact us" navigateTo="/contact"  />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
