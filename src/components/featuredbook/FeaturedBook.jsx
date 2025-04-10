import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import Rating from "react-rating"
import { images } from "../../assets/images/images"
import Button from "../button/Button"

const FeaturedBook = ({classList}) => {



    return (
        <div className={`featuredbook bg-white bg-opacity-20 backdrop-blur-2xl p-4 rounded-lg custom-shadow md:flex flex-row gap-3 w-full text-white flex ${classList}`}>
            <div className="left-image flex-shrink-0 w-[40%] md:max-h-[350px] overflow-hidden">
                <img className="rounded-md w-full h-[250px] sm:h-full object-cover" src={images.silentWomen} alt="" />
            </div>
            <div className="relative right-content w-[60%] flex-shrink-0 p-2 flex-1">
                <div className="released">
                    <p className="mb-4">Released: 2022</p>
                </div>
                <div className="book-info flex flex-col justify-between">
                    <p className="book-title font-bold">Silent Women</p>
                    <p className="book-author text-[12px]">Aileen Nedd</p>
                    <div className="rating mt-2s mt-4">
                        <p>Rating</p>
                        <Rating readonly={true} initialRating={4} fullSymbol={<FontAwesomeIcon icon={faStar} color="#FFFF00"/>} emptySymbol={<FontAwesomeIcon icon={faStar} color="#FFFFFF"/>} />
                    </div>
                    <div className="tag-n-book-description flex flex-col justify-between">
                        <p className="book-short-description text-[12px] mt-4 flex-grow">
                            {
                                `In a dark and mysterious cityy wherer shadows cover the streets and secrets hide in every corner four young women lead their unremarkable lives
                                
                                In a dark and mysterious cityy wherer shadows cover the streets and secrets hide in every corner four young women lead their unremarkable lives
                                `
                            }
                        </p>
                        <div className="tags mt-4 flex gap-2 flex-wrap text-[12px] leading-[1]">
                            <span className="cursor-pointer">#horror</span>
                            <span className="cursor-pointer">#murder</span>
                            <span className="cursor-pointer">#women</span>
                            <span className="cursor-pointer">#criminal</span>
                            <span className="cursor-pointer">#travel</span>
                        </div>
                    </div>
                    <div className="book-action">
                        <Button title="Read Now" navigateTo="#" className="mt-4 lg:absolute bottom-0" />
                    </div>
                </div>
            </div>
        </div>
    )

}

FeaturedBook.propTypes = 
{
    classList: PropTypes.string

}

export default FeaturedBook
