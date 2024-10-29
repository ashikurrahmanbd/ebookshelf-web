import AboutUs from "./sections/AboutUs"
import BookCategory from "./sections/BookCategory"
import Comments from "./sections/comments"
import CreateAccount from "./sections/CreateAccount"
import Hero from "./sections/Hero"
import MostPopularBooks from "./sections/MostPopularBooks"
import RecommendedBooks from "./sections/RecommendedBooks"
import Subscribe from "./sections/Subscribe"
import TrendingBooks from "./sections/TrendingBooks"


const HomePage = () => {

    return (

        <div className="homepage">
            <Hero />
            <TrendingBooks />
            <CreateAccount />
            <BookCategory />
            <RecommendedBooks />
            <Subscribe />
            <MostPopularBooks />
            <AboutUs />
            <Comments />
        </div>
        
    )
}

export default HomePage