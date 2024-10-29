import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import Slider from "react-slick";
import { images } from "../../assets/images/images";
import "./CommentsSlider.css";




const CommentsSlider = () => {

    const slides = [
        {
            id: 1,
            image: images.theShadowKing,
            name: "Emily Davis",
            personImage: images.commentPeson1,
            rating: 4,
            comment: "This book is not only gripping in its plot but also immersive in its atmosphere of loneliness and struggle with difficult circumstances."
        },
        {
            id: 2,
            image: images.theShadowKing,
            name: "Emily Davis",
            personImage: images.commentPeson2,
            rating: 5,
            comment: "This book is not only gripping in its plot but also immersive in its atmosphere of loneliness and struggle with difficult circumstances."
        },
        {
            id: 3,
            image: images.theShadowKing,
            name: "Emily Davis",
            personImage: images.commentPeson3,
            rating: 3,
            comment: "This book is not only gripping in its plot but also immersive in its atmosphere of loneliness and struggle with difficult circumstances."
        }
    ];
    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: "40px", // Adjust for more space if necessary
        autoplay: false,          // Enable auto-sliding
        autoplaySpeed: 3000, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    

    return (
        <Slider {...settings}>

            {
                slides.map((slide) => (

                    <div className="slider-item mb-4" key={slide.id} >
                        <div className="single-slide w-full rounded-md flex flex-row gap-4 p-4 bg-white bg-opacity-20 backdrop-blur-2xl">
                            <div className="comment-book-image basis-4/12 h-full">
                                <img className="rounded-md object-cover h-full w-full" src={slide.image} alt="" />
                            </div>
                            <div className="rightside-content basis-8/12">
                                <div className="person-info flex gap-2 items-center">
                                    <img className="w[60px] h-[60px] rounded-full" src={slide.personImage} alt="" />
                                    <div>
                                        <p>{slide.name}</p>
                                        <Rating readonly={true} initialRating={slide.rating} fullSymbol={<FontAwesomeIcon icon={faStar} color="#FFFF00"/>} emptySymbol={<FontAwesomeIcon icon={faStar} color="#FFFFFF"/>} />
                                    </div>
                                </div>
                                <div className="person-comment mt-4">

                                    <p className="text-sm">{slide.comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }

         
                    
        

     
         


        </Slider>
    )

}

export default CommentsSlider



