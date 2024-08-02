import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[590px] bg-background font-inter"
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-6xl font-bold leading-normal lg:leading-[96px] text-white">Your Portal to India's <br />Exquisite Real Estate</h1>
          <p className="my-7 text-md lg:text-lg font-normal">
            Seamlessly connecting you to the heartbeat of India;s prime properties.
          </p>
          <div>
            <button className="bg-[#005EAE] px-7 py-4 rounded-lg flex items-center gap-3 text-md lg:text-lg font-semibold"><FaSearch/> Find Property</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
