import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Popular from "./Popular/Popular";
import Testimonials from "../../components/Testimonials";
import NewListed from "./NewListed/NewListed";

const Buy = () => {
  return (
    <div className="font-mont">
        <div className="min-h-[550px] bg-frame bg-no-repeat bg-cover"></div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mt-14">
            <div className="bg-[#FDF0E7] p-6">
                <h1 className="text-2xl text-[#D95D0F] font-bold">2k+</h1>
                <p className="mb-12">New Flat Listed</p>
                <div className="flex justify-between items-center text-[#EE6611]">
                    <a href="#" target="_blank" className="underline">View all</a>
                    <FaRegArrowAltCircleDown className="text-2xl h-8 w-8"/>
                </div>
            </div>
            <div className="bg-[#ECF5FF] p-6">
                <h1 className="text-2xl text-[#0051A1] font-bold">2k+</h1>
                <p className="mb-12">New Flat Listed</p>
                <div className="flex justify-between items-center text-[#0059B1]">
                    <a href="#" target="_blank" className="underline">View all</a>
                    <FaRegArrowAltCircleDown className="text-2xl h-8 w-8"/>
                </div>
            </div>
            <div className="bg-[#FDF0E7] p-6">
                <h1 className="text-2xl text-[#D95D0F] font-bold">2k+</h1>
                <p className="mb-12">New Flat Listed</p>
                <div className="flex justify-between items-center text-[#EE6611]">
                    <a href="#" target="_blank" className="underline">View all</a>
                    <FaRegArrowAltCircleDown className="text-2xl h-8 w-8"/>
                </div>
            </div>
            <div className="bg-[#ECF5FF] p-6">
                <h1 className="text-2xl text-[#0051A1] font-bold">2k+</h1>
                <p className="mb-12">New Flat Listed</p>
                <div className="flex justify-between items-center text-[#0059B1]">
                    <a href="#" target="_blank" className="underline">View all</a>
                    <FaRegArrowAltCircleDown className="text-2xl h-8 w-8"/>
                </div>
            </div>
        </div>
        <Popular/>
        <NewListed/>
        <Testimonials/>
        <div className="py-12 bg-[#FDF0E7] mt-10">
            <div className="container mx-auto flex justify-between">
            <div className=" ">
                <h2 className="text-xl font-semibold text-[#101828] font-mont">Post your Property for free</h2>
                <p className="font-poppins text-[#475467] mt-6">List it on Your Propriety and get genuine leads</p>
            </div>
            <div>
                <button className="bg-[#F06224] py-4 px-7 rounded-lg text-white font-inter font-semibold text-lg">Post Property</button>
            </div>
            </div>
        </div>
    </div>

  );
  
};

export default Buy;
