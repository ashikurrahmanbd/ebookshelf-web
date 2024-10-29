import { images } from "../../../assets/images/images"

const Subscribe = () => {

    return (
        <div className="subscribe bg-primary">
            <div className="container mx-auto px-4 sm:px-2">
                <div className="subscribe-elements sm:flex items-center gap-4 py-[40px]">
                    <div className="left-image">
                        <img src={images.newsletterLeftImage} alt="" />
                    </div>
                    <div className="newsletter">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-2xl mt-2 sm:mt-0">Subscribe to our Newsletter</h3>
                            <p className="text-white">Hre you will find the latest and mosot interesting updates from the world o literatur. Follow our news and be alwayss one step ahead in teh world of reading!</p>
                            <div className="subscribe-form">
                                <input className="p-2 w-[250px] rounded-md focus:outline-none bg-white bg-opacity-20 backdrop-blur-2xl text-white" type="text" placeholder="Type Your Email" />
                                <button className="ml-4 text-white bg-white bg-opacity-20 backdrop-blur-2xl px-8 py-2 rounded-md">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Subscribe
