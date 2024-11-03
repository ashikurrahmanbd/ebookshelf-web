import AboutUs from "./sections/AboutUs"
import BookCategory from "./sections/BookCategory"
import Comments from "./sections/comments"
import CreateAccount from "./sections/CreateAccount"
import FooterBottom from "./sections/FooterBottom"
import FooterTop from "./sections/FooterTop"
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
            <FooterTop />
            <FooterBottom />
        </div>
        
    )
}

export default HomePage