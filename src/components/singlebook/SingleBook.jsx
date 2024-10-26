import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const SingleBook = (props) => {


    const {imgSource, bookTitle, bookAuthor, readMorePath} = props;

    return (

        <div className="singlebook relative bg-white bg-opacity-20 backdrop-blur-2xl p-8 rounded-lg custom-shadow mb-[75px]">
            <div className="book-image mt-[-90px] mb-[10px]">
                <img className="rounded-lg aspect-[1.3/2]" src={imgSource} alt="" />
            </div>
            <div className="book-description">
                <h3 className="text-lg font-bold">{`${bookTitle}`}</h3>
                <p>{`${bookAuthor}`}</p>
            </div>
            <div className="book-action mt-4">
                <button className="absolute bottom-[-15px] left-0 right-0 mx-auto px-6 py-2 bg-secondary inline-block w-[150px] rounded-[35px] custom-shadow border border-white hover:bg-white hover:text-black"><Link to={`${readMorePath}`}>Read Now</Link></button>
            </div>
        </div>
    )

}

SingleBook.propTypes = {

    imgSource: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    readMorePath: PropTypes.string.isRequired,

}


export default SingleBook
