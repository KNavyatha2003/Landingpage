import React from "react";
import Carousel from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/Carousel.css';

function Arrow(props) {
    const { className, style} = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", fontSize:"large"}}
    
    
      />
    );
}

function CarouselSlider() {
    const settings = {
        dots: true,
        infinite: true,
        AutoplaySpeed:0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 124,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };


    return (
        <div className="container ">
            <Carousel {...settings}>
                {[
                    {
                        image: "image1.jpg",
                        title: "Effortless elegance at its best.",
                        description: "boutique style dresses and More!"
                    },
                    {
                        image: "image2.jpg",
                        title: "Fashion that fits just right.",
                        description: "style dresses for wedding."
                    },
                    {
                        image: "image3.jpg",
                        title: "Less talking, more shopping!",
                        description: "Get Upto 30% Off."
                    },
                    {
                        image: "image4.jpg",
                        title: "Wear it. Feel it. Love it.",
                        description: "Collections by Navya's Fashion Designers."
                    }
                ].map((item, index) => (
                    <div key={index} className="d-flex justify-content-around font-weight-bold p-2">
                        <img src={item.image} alt="" className="w-50"/>
                        <div className="p-2">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button type="button" className="btn btn-warning">Shop Now</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    
    );
}
export default CarouselSlider;