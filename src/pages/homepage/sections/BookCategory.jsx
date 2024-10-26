import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { images } from "../../../assets/images/images"
import SingleCategory from "../../../components/singlecategory/SingleCategory"


const BookCategory = () => {

    return (
        <div className="book-category bg-primary py-[40px]">
            <div className="container mx-auto px-4 sm:px-2">
                <div className="book-category-element">

                    <div className="section-heading text-white flex justify-between items-center">
                        <h2 className="text-3xl">Book Categories</h2>
                        <div className="flex items-center gap-2 text-lg cursor-pointer">
                            <p className="text-white">See All</p>
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    </div>

                    <div className="category-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-[35px]">
                        <SingleCategory categoryTitle="Fantasy" categoryBackground={images.bcatbg3} /> 
                        <SingleCategory categoryTitle="Horror" categoryBackground={images.bcatbg2} />
                        <SingleCategory categoryTitle="Fiction" categoryBackground={images.bcatbg1} />
                        <SingleCategory categoryTitle="Thriller" categoryBackground={images.bcatbg4} />
                        
                    </div>    


                </div>
            </div>
        </div>
    )

}

export default BookCategory
