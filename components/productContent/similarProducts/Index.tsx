import SimilarProductCard from "./SimilarProductCard";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./similarProductSliderStyle.css";
const SimilarProducts = () => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={30}
      navigation
      className="similarProducts-slider !pb-5"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 2,
        },
      }}
    >
      {[...Array(6)].map((_, idx) => (
        <SwiperSlide className="flex-none lg:w-56 md:w-3/4 w-2/4" key={idx}>
          <SimilarProductCard key={idx} idx={idx} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default SimilarProducts;
