import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItems from "./SliderItem";

const SliderCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <SliderItems />
        </div>
        <div>
          <SliderItems />
        </div>
        <div>
          <SliderItems />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCarousel;
