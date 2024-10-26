import PropTypes from "prop-types";


const SingleCategory = (props) => {

    const {categoryTitle, categoryBackground} = props;

    return (
        <div className="single-category bg-no-repeat bg-cover bg-centers min-h-[100px] flex items-center justify-center px-[50px] rounded-md custom-shadow cursor-pointer" style={ { 

            backgroundImage: `url(${categoryBackground})`,
    
        } }>
            <h3 className="text-xl text-white text-center">{`${categoryTitle}`}</h3>
        </div>
    )
}

SingleCategory.propTypes = {

    categoryTitle: PropTypes.string.isRequired,
    categoryBackground: PropTypes.string.isRequired

}

export default SingleCategory
