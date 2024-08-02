import { FaSearch } from "react-icons/fa";
import img1 from "../../../assets/images/Rectangle 20.png";
import img2 from "../../../assets/images/Rectangle 21-1.png";
import img3 from "../../../assets/images/Rectangle 21.png";
import img4 from "../../../assets/images/Rectangle 20.png";
import { FaPlayCircle } from "react-icons/fa";

const Body = () => {
  return (
    <div className="font-inter">
      <div className="hero mt-12 container mx-auto p-3">
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src={img1}
              className="lg:max-w-md max-w-xs lg:min-h-[330px] rounded-lg shadow-2xl"
            />
            <div className="flex flex-row justify-end absolute bg-white rounded-full right-1/4 bottom-1/2">
              <FaPlayCircle className="text-6xl text-blue-500  " />
            </div>
            <img
              src={img2}
              className="lg:max-w-md max-w-xs lg:ml-20 ml-6 lg:-mt-28 -mt-16 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2">
              <hr className="border-2 w-12 border-[#F06711]" />
              <p className="text-[#F06711] font-semibold text-lg">Property buying</p>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold">
              Efficient and Transparent <br />
              Home Buying Solutions
            </h1>
            <p className="py-6 text-[#667085] font-medium">
              It is a long established fact that a reader will be distacted by
              the readable content of a page when looking at its layout.
            </p>
            <div>
              <button className="bg-[#E6EFF7] text-[#00437C] font-semibold px-5 py-3 rounded-lg flex items-center gap-3 ">
                {" "}
                <FaSearch /> Find Property
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero lg:mt-20 container mx-auto p-3">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-12">
          <div className="lg:w-1/2 lg:mt-6">
            <div className="flex items-center gap-2">
              <hr className="border-2 w-12 border-[#F06711]" />
              <p className="text-[#F06711] font-semibold text-lg">Property buying</p>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold">
              Efficient and Transparent <br />
              Home Buying Solutions
            </h1>
            <p className="py-6 text-[#667085] font-medium">
              It is a long established fact that a reader will be distacted by
              the readable content of a page when looking at its layout.
            </p>
            <div>
              <button className="bg-[#E6EFF7] px-5 py-3 text-[#00437C] font-semibold rounded-lg flex items-center gap-3 ">
                {" "}
                <FaSearch /> Find Property
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative ">
            <img
              src={img1}
              className="lg:max-w-md max-w-xs lg:ml-20 ml-6 rounded-lg shadow-2xl absolute z-20"
            />
            <div className="flex flex-row justify-end absolute bg-white rounded-full left-10 lg:bottom-1/2 z-30">
              <FaPlayCircle className="text-6xl text-blue-500" />
            </div>
            <img
              src={img2}
              className="lg:max-w-md max-w-xs lg:min-h-[330px] rounded-lg mt-28 shadow-2xl absolute z-10"
            />
          </div>
        </div>
      </div>
      <div className="hero lg:mt-56 mt-72 container mx-auto p-3">
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src={img1}
              className="lg:max-w-md max-w-xs lg:min-h-[330px] rounded-lg shadow-2xl"
            />
            <div className="flex flex-row justify-end absolute bg-white rounded-full right-1/4 lg:bottom-1/2">
              <FaPlayCircle className="text-6xl text-blue-500  " />
            </div>
            <img
              src={img2}
              className="lg:max-w-md max-w-xs lg:ml-20 ml-6 lg:-mt-28 -mt-16 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2">
              <hr className="border-2 w-12 border-[#F06711]" />
              <p className="text-[#F06711] font-semibold text-lg">Property buying</p>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold">
              Efficient and Transparent <br />
              Home Buying Solutions
            </h1>
            <p className="py-6 text-[#667085] font-medium">
              It is a long established fact that a reader will be distacted by
              the readable content of a page when looking at its layout.
            </p>
            <div>
              <button className="bg-[#E6EFF7] px-5 py-3 rounded-lg text-[#00437C] font-semibold flex items-center gap-3 ">
                {" "}
                <FaSearch /> Find Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
