import BookCategory from "./sections/BookCategory"
import CreateAccount from "./sections/CreateAccount"
import Hero from "./sections/Hero"
import TrendingBooks from "./sections/TrendingBooks"


const HomePage = () => {

    return (

        <div className="homepage">
            <Hero />
            <TrendingBooks />
            <CreateAccount />

            <BookCategory />
        </div>
        
    )
}

export default HomePage