import BookCategory from "./sections/BookCategory"
import CreateAccount from "./sections/CreateAccount"
import Hero from "./sections/Hero"
import RecommendedBooks from "./sections/RecommendedBooks"
import TrendingBooks from "./sections/TrendingBooks"


const HomePage = () => {

    return (

        <div className="homepage">
            <Hero />
            <TrendingBooks />
            <CreateAccount />
            <BookCategory />
            <RecommendedBooks />
        </div>
        
    )
}

export default HomePage