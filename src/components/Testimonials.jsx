import clinet1 from "../assets/images/Rectangle 29.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-[40px] font-mont font-bold text-center my-8">
        Testimonials
      </h1>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="carousel-item bg-[#ECF5FF] flex flex-col items-center justify-center p-5">
            <div className="rating">
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                defaultChecked
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#F4E6C5]"
                />
            </div>
            <p className="font-poppins text-lg text-[#818181] my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
            <img src={clinet1} alt="client" className="w-12 h-12 rounded-full"/>
            <p className="text-xl font-mont font-semibold">Tony Stark</p>
            <p className="font-poppins text-[#6B7280]">Marketing manager, XYZ</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel-item bg-[#ECF5FF] flex flex-col items-center justify-center p-5">
            <div className="rating">
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                defaultChecked
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#F4E6C5]"
                />
            </div>
            <p className="font-poppins text-lg text-[#818181] my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
            <img src={clinet1} alt="client" className="w-12 h-12 rounded-full"/>
            <p className="text-xl font-mont font-semibold">Tony Stark</p>
            <p className="font-poppins text-[#6B7280]">Marketing manager, XYZ</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel-item bg-[#ECF5FF] flex flex-col items-center justify-center p-5">
            <div className="rating">
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                defaultChecked
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FeC84B]"
                />
                <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#F4E6C5]"
                />
            </div>
            <p className="font-poppins text-lg text-[#818181] my-5">"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
            <img src={clinet1} alt="client" className="w-12 h-12 rounded-full"/>
            <p className="text-xl font-mont font-semibold">Tony Stark</p>
            <p className="font-poppins text-[#6B7280]">Marketing manager, XYZ</p>
            </div>
        </SwiperSlide>   
      </Swiper>

    </div>
  );
};

export default Testimonials;
