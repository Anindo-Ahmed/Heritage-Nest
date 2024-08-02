import cardImg1 from "../../../assets/images/Banner Image-2.png";
import cardImg2 from "../../../assets/images/BannerImage-1.png";
import cardImg3 from "../../../assets/images/Banner Image.png";
import cardImg4 from "../../../assets/images/Banner Image-3.png";
import { FaSquareFull } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center p-2">
        <h2 className="text-xl lg:text-3xl font-semibold">Popular Properties</h2>
        <a
          href="#"
          target="_blank"
          className="underline text-[#0059B1] font-poppins font-semibold"
        >
          See all property
        </a>
      </div>
      {/* card section */}
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to="/buy/:id">
                <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card lg:w-96 shadow-xl">
              <figure>
                <img src={cardImg4} alt="property image" />
              </figure>
              <div className="flex items-center justify-between lg:px-4 px-6 font-poppins my-2">
                <div className="bg-[#C5E2FF] py-2 px-1 text-sm font-normal rounded-md">
                  Apartment
                </div>
                <div className="flex items-center justify-between gap-1">
                  <FaSquareFull className="text-xs text-[#EE6611]" />
                  <h2 className="font-medium text-base">Ready to move</h2>
                </div>
              </div>
              <hr />
              <div className="px-4">
                <h2 className="card-title font-mont">SunnySlope Suites</h2>
                <div className="flex items-center gap-1 font-poppins">
                  <IoLocationOutline className="text-lg text-[#EE6611]" />
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <p className="font-mont text-2xl font-semibold my-4">$250000</p>
              </div>
            </div>
                </div>
            </Link>
          
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/buy/:id'>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card lg:w-96 shadow-xl">
              <figure>
                <img src={cardImg4} alt="property image" />
              </figure>
              <div className="flex items-center justify-between lg:px-4 px-6 font-poppins my-2">
                <div className="bg-[#C5E2FF] py-2 px-1 text-sm font-normal rounded-md">
                  Apartment
                </div>
                <div className="flex items-center justify-between gap-1">
                  <FaSquareFull className="text-xs text-[#EE6611]" />
                  <h2 className="font-medium text-base">Ready to move</h2>
                </div>
              </div>
              <hr />
              <div className="px-4">
                <h2 className="card-title font-mont">SunnySlope Suites</h2>
                <div className="flex items-center gap-1 font-poppins">
                  <IoLocationOutline className="text-lg text-[#EE6611]" />
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <p className="font-mont text-2xl font-semibold my-4">$250000</p>
              </div>
            </div>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/buy/:id">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card lg:w-96 shadow-xl">
              <figure>
                <img src={cardImg4} alt="property image" />
              </figure>
              <div className="flex items-center justify-between lg:px-4 px-6 font-poppins my-2">
                <div className="bg-[#C5E2FF] py-2 px-1 text-sm font-normal rounded-md">
                  Apartment
                </div>
                <div className="flex items-center justify-between gap-1">
                  <FaSquareFull className="text-xs text-[#EE6611]" />
                  <h2 className="font-medium text-base">Ready to move</h2>
                </div>
              </div>
              <hr />
              <div className="px-4">
                <h2 className="card-title font-mont">SunnySlope Suites</h2>
                <div className="flex items-center gap-1 font-poppins">
                  <IoLocationOutline className="text-lg text-[#EE6611]" />
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <p className="font-mont text-2xl font-semibold my-4">$250000</p>
              </div>
            </div>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/buy/:id">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card lg:w-96 shadow-xl">
              <figure>
                <img src={cardImg4} alt="property image" />
              </figure>
              <div className="flex items-center justify-between lg:px-4 px-6 font-poppins my-2">
                <div className="bg-[#C5E2FF] py-2 px-1 text-sm font-normal rounded-md">
                  Apartment
                </div>
                <div className="flex items-center justify-between gap-1">
                  <FaSquareFull className="text-xs text-[#EE6611]" />
                  <h2 className="font-medium text-base">Ready to move</h2>
                </div>
              </div>
              <hr />
              <div className="px-4">
                <h2 className="card-title font-mont">SunnySlope Suites</h2>
                <div className="flex items-center gap-1 font-poppins">
                  <IoLocationOutline className="text-lg text-[#EE6611]" />
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <p className="font-mont text-2xl font-semibold my-4">$250000</p>
              </div>
            </div>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popular;
