import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { images } from "../../../assets/images/images"
import FeaturedBook from "../../../components/featuredbook/FeaturedBook"
import SingleBook from "../../../components/singlebook/SingleBook"


const RecommendedBooks = () => {

    return (
        <div className="recommended-books py-[60px] bg-black w-full">
            <div className="container mx-auto px-4 sm:px-0 w-full">
                <div className="recommended-books-elements">

                    <div className="section-heading text-white flex justify-between items-center mb-8">
                        <h2 className="text-3xl">Trending Books</h2>
                        <div className="flex items-center gap-2 text-lg cursor-pointer">
                            <p className="text-white">See All</p>
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    </div>

                    <div className="md:flex w-full gap-4">
                        <div className="fetaured-book md:basis-8/12 lg:basis-6/12 w-full mb-4 md:mb-0 flex-shrink-0">

                            <FeaturedBook />

                        </div>
                        <div className="right-side-recommended-books md:basis-4/12 lg:basis-6/12 md:flex gap-2 text-white flex-shrink-0">

                            <SingleBook bookTitle="On Earth We're Briefly Gorgeous" bookAuthor="Ocean Voung" readMorePath="#" imgSource={images.oceamVoungOnEarth} titleTextSize="text-[14px] font-bold" />
                            <SingleBook bookTitle="On Earth We're Briefly Gorgeous" bookAuthor="Ocean Voung" readMorePath="#" imgSource={images.oceamVoungOnEarth} titleTextSize="text-[14px]  font-bold" classList="md:hidden lg:block"  />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default RecommendedBooks
