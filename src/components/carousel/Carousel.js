import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
	let settings = {
		dots: true,
		infinite: true,
        speed: 500,
        arrows: false,
		slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
	};
	return (
		<Slider {...settings}>
			{Array(4).fill().map((value, index) => (
				<div key={index} className="content-container">
					<h1 className="text">{`Hello:)`}</h1>
                   
					<img className="image" src={`https://picsum.photos/id/${index+1*111}/1000/700`} alt="image1" />
				</div>
			))}
		</Slider>
	);
};

export default Carousel;
