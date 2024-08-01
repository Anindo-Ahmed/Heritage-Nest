import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="hero h-[590px] bg-background"
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="mb-5 text-5xl font-bold">Your Portal to India's <br />Exquisite Real Estate</h1>
          <p className="my-12">
            Seamlessly connecting you to the heartbeat of India;s prime properties.
          </p>
          <div>
            <button className="bg-[#005EAE] px-7 py-4 rounded-lg flex items-center gap-3 "> <FaSearch/> Find Property</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
