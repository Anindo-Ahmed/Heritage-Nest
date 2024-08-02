import { FaRegArrowAltCircleDown } from "react-icons/fa";
import img1 from "../../assets/images/img.jpg";
import img2 from "../../assets/images/img.png";
import Team from "../../components/Team";

const About = () => {
  return (
    <div>
      <div className="min-h-[360px] bg-aboutframe bg-no-repeat bg-cover"></div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mt-14">
        <div className="bg-[#FDF0E7] p-6">
          <h1 className="text-2xl text-[#D95D0F] font-bold">2k+</h1>
          <p className="mb-12">New Flat Listed</p>
          <div className="flex justify-between items-center text-[#EE6611]">
            <a href="#" target="_blank" className="underline">
              View all
            </a>
            <FaRegArrowAltCircleDown className="text-2xl h-8 w-8" />
          </div>
        </div>
        <div className="bg-[#ECF5FF] p-6">
          <h1 className="text-2xl text-[#0051A1] font-bold">2k+</h1>
          <p className="mb-12">New Flat Listed</p>
          <div className="flex justify-between items-center text-[#0059B1]">
            <a href="#" target="_blank" className="underline">
              View all
            </a>
            <FaRegArrowAltCircleDown className="text-2xl h-8 w-8" />
          </div>
        </div>
        <div className="bg-[#FDF0E7] p-6">
          <h1 className="text-2xl text-[#D95D0F] font-bold">2k+</h1>
          <p className="mb-12">New Flat Listed</p>
          <div className="flex justify-between items-center text-[#EE6611]">
            <a href="#" target="_blank" className="underline">
              View all
            </a>
            <FaRegArrowAltCircleDown className="text-2xl h-8 w-8" />
          </div>
        </div>
        <div className="bg-[#ECF5FF] p-6">
          <h1 className="text-2xl text-[#0051A1] font-bold">2k+</h1>
          <p className="mb-12">New Flat Listed</p>
          <div className="flex justify-between items-center text-[#0059B1]">
            <a href="#" target="_blank" className="underline">
              View all
            </a>
            <FaRegArrowAltCircleDown className="text-2xl h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="lg:w-full mt-10 p-4 container mx-auto">
        <img src={img1} />
      </div>
      <div className="lg:w-full mt-10 p-4 container mx-auto relative">
        <div className="flex justify-center ml-24">
            <img src={img2} 
            className="w-1/2  left-1/3"/>
        </div>
        <div className="bg-[#FDF0E7] p-8 max-w-[592px] -mt-28 absolute">
          <div className="flex items-center gap-2">
            <hr className="border-2 w-12 border-[#F06711]"/>
            <p className="text-[#F06711] font-semibold">Mission Statement</p>
          </div>
          <h1 className="font-mont text-4xl font-bold text-gray-900 my-4">Efficient and Transparent <br />Home Buying Solutions</h1>
          <p className="font-poppins text-gray-500">To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
        </div>
      </div>
      <Team/>
    </div>
  );
};

export default About;
