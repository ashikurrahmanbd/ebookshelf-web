import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const SingleBook = (props) => {


    const {imgSource, bookTitle, bookAuthor, readMorePath, titleTextSize, classList} = props;

    return (

        <div className={`singlebook mb-[35px]  lg:mb-[0px] ${classList}`}>
            <div className="book-image mb-[10px] relative bg-white bg-opacity-20 backdrop-blur-2xl p-4 rounded-lg custom-shadow">
                <img className="rounded-lg aspect-[1.3/2]" src={imgSource} alt="" />
                <FontAwesomeIcon icon={faBookmark} className="text-lg absolute top-0 right-0 text-red-600 p-1 cursor-pointer p-2"/>
            </div>
            <div className="book-description text-center">
                <h3 className={`text-lg truncate ${titleTextSize}`}>{`${bookTitle}`}</h3>
                <p className="text-sm">{`${bookAuthor}`}</p>
            </div>
            <div className="book-action mt-4 text-center">
                <button className="bottom-[-15px] left-0 right-0 mx-auto px-6 py-2 bg-secondary inline-block w-[150px] rounded-[35px] custom-shadow border border-white hover:bg-white hover:text-black text-white"><Link to={`${readMorePath}`}>Read Now</Link></button>
            </div>
        </div>
    )

}

SingleBook.propTypes = {

    imgSource: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    readMorePath: PropTypes.string.isRequired,
    titleTextSize: PropTypes.string,
    classList: PropTypes.string

}


export default SingleBook
