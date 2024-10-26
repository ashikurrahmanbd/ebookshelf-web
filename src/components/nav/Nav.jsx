import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import { images } from "../../assets/images/images"



const Nav = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function handleMenu(){

        setShowMobileMenu(!showMobileMenu);

    }



    return (
        <div className="nav bg-primary py-2 text-white px-2 sm:px-0 relative">

            <div className="container mx-auto px-1">
                <div className="nav-elements flex justify-between items-center">

                    <div className="logo flex-shrink-0">
                        <img className="cursor-pointer w-[50px] h-[50px]" src={images.ebookShelfLogo} alt="" />
                    </div>

                    <div className="menu flex-shrink-0 hidden sm:block">
                        <ul className="inline-flex gap-1">
                            <li className="nav-item"> <Link to="/">Home</Link> </li>
                            <li className="nav-item"><Link to="/books">Books</Link></li>
                            <li className="nav-item">Categories</li>
                            <li className="nav-item"><Link to="/about-us">About Us</Link></li>
                            <li className="nav-item"><Link to="/book-reviews">Book Reviews</Link></li>
                            <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="seach-bar sm:hidden">
                        <input className="border-0 bg-[#16161C80] px-4 py-2 rounded-[35px] text-sm outline-none focus:shadow-custom-colored" type="text" placeholder="Search Book" />

                    </div>

                    <div className="nav-right flex-shrink-0">
                        
                        <div className="account">
                            <div className="login-signup hidden sm:block">
                                <p className="login-signup-link">
                                    <span className="login-link">Login</span> / <span className="signup-link">SignUp</span>
                                </p>
                            </div>
                            <div className="profile">
                                {/* account pic and other info */}
                            </div>
                        </div>

                        <div className="mobile-menu sm:hidden">
                            
                            <div className="toggle-menu">
                                <FontAwesomeIcon icon={ showMobileMenu ? faTimes : faBars } size="2x" className="cursor-pointer" onClick={handleMenu} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className={`md:hidden mobile-menu-wrapper bg-slate-400 absolute transition-all ${showMobileMenu ? 'w-96 h-[100vh] top-[100%] right-0' : 'top-[100%] right-[-100%]'}`}>

            </div>
        </div>
    )
}

export default Nav
