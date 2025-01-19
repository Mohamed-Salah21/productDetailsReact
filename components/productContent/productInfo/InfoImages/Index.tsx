import { useState } from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./imagesSliderStyle.css";
const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState("chair1.jpg");

  return (
    <div className="bg-lightPrimary 2xl:h-[524px] h-[400px] 2xl:w-[584px] lg:w-[90%] w-full  flex md:flex-row flex-col-reverse items-center justify-center relative  gap-10 md:px-0 px-3">
      {
        <button className="absolute top-5 right-5 bg-gold text-white py-1 px-3 rounded-xl text-xs font-semibold">
          25% OFF
        </button>
      }
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        className="productImages-slider md:h-[400px] h-auto !mx-0  lg:w-auto w-full"
        spaceBetween={40}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            direction: "vertical",
            spaceBetween: 40,
          },
          768: {
            direction: "vertical", 
            spaceBetween: 30,
          },
          0: {
            direction: "horizontal",
            spaceBetween: 10, 
          },
        }}
      >
        {[...Array(7)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={`/chair${idx + 1}.jpg`}
              alt={`chair${idx + 1}`}
              className={`lg:h-24 h-20 lg:w-24 w-20 object-fill cursor-pointer ${
                selectedImage === `chair${idx + 1}.jpg`
                  ? "border-2 border-primary"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedImage(`chair${idx + 1}.jpg`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        src={`/${selectedImage}`}
        alt={selectedImage}
        className="lg:h-[339px] h-44 2xl:w-[330px] xl:w-[270px] lg:w-[220px] w-44 object-fill"
      />
    </div>
  );
};

export default ProductImages;
