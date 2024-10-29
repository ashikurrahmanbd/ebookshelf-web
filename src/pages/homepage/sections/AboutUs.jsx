import { images } from "../../../assets/images/images"


const AboutUs = () => {

    return (
        <div className="about-us bg-primary py-[50px]">
            <div className="container mx-auto px-4 sm:px-2">
                <div className="about-us-elements sm:flex gap-4 w-full items-center">
                    <div className="left-side sm:flex gap-4">
                        <div className="image1box sm:basis-6/12">
                            <img className="rounded-md hidden sm:block" src={images.aboutS1} alt="" />
                        </div>
                        <div className="image2box sm:basis-6/12 sm:flex flex-col gap-4 w-full">
                            <img className="rounded-md hidden sm:block" src={images.aboutS2} alt="" />
                            <img className="rounded-md" src={images.aboutS3} alt="" />
                            <div className="textbox text-white mt-[-50px] flex justify-center">
                                <p className="w-[180px] bg-white bg-opacity-20 backdrop-blur-2xl px-2 py-2 rounded-md text-center text-sm italic border border-spacing-1">Over 50000 books in our Collections</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-about-us-text text-white flex flex-col gap-4 mt-6 sm:mt-0">

                        <h3 className="text-3xl">About Us</h3>
                        <p>Our Project unities book lovers around the world. Providing access to thousands of works. We believe that Literature should be accessible  to everyone. Rergardless of place or circumstance.</p>

                        <p>Our Project unities book lovers around the world. Providing access to thousands of works. We believe that Literature should be accessible  to everyone. Rergardless of place or circumstance.</p>

                        <button className="text-white bg-white bg-opacity-20 backdrop-blur-2xl px-8 py-2 rounded-md w-max hover:bg-white hover:text-black">
                            Contact us
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutUs
