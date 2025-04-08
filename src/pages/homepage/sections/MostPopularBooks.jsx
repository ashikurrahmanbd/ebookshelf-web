import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { images } from "../../../assets/images/images"
import SingleBook from "../../../components/singlebook/SingleBook"


const MostPopularBooks = () => {
    
    return (
        <div className="most-popular-books bg-black py-[40px]">
            <div className="container mx-auto">
                <div className="most-popular-books-elements">
                    <div className="section-heading text-white flex justify-between items-center">
                        <h2 className="text-3xl">Most Popular</h2>
                        <div className="flex items-center gap-2 text-lg cursor-pointer">
                            <p className="text-white">See All</p>
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    </div>
                    <div className="mt-[40px] trending-books-grid text-white gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <SingleBook bookTitle="On Earth We're Briefly Gorgeous" bookAuthor="Ocean Voung" readMorePath="#" imgSource={images.tessOfTheRoad} />
                        <SingleBook bookTitle="The Swetest Fruits" bookAuthor="Monique Troung" readMorePath="#" imgSource={images.theBelovedGirls} />
                        <SingleBook bookTitle="The Shadow King" bookAuthor="Harry Sidebottom" readMorePath="#" imgSource={images.theShadowKing} />
                        <SingleBook bookTitle="I want my hat back" bookAuthor="Joney Klassen" readMorePath="#" imgSource={images.theLastCuentista} />
                        <SingleBook bookTitle="On Earth We're Briefly Gorgeous" bookAuthor="Ocean Voung" readMorePath="#" imgSource={images.tessOfTheRoad} />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPopularBooks
