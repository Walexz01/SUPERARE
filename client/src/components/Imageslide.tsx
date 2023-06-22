// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideimageContainer from "./SlideimageContainer";
import { useEffect, useState } from "react";
import { images } from "../data/Imagesslide";

export default () => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const setSlidesPerview = () => {
    setSlidesPerView(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 4
        : 0
    );
  };
  useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <Swiper spaceBetween={50} slidesPerView={slidesPerView}>
      {images.map(({ image, backgroundcolor }, index) => (
        <SwiperSlide key={index}>
          <SlideimageContainer
            image={image}
            backgroundcolor={backgroundcolor}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
