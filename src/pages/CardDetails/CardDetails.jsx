import { IoLocationOutline } from "react-icons/io5";
import img1 from "../../assets/images/Rectangle 20.png";
import {
  FaBath,
  FaBed,
  FaGraduationCap,
  FaIntercom,
  FaParking,
  FaWalking,
  FaWifi,
} from "react-icons/fa";
import {
  MdBalcony,
  MdOutlineLocalLaundryService,
  MdOutlineSportsTennis,
} from "react-icons/md";
import { RiArchiveDrawerLine } from "react-icons/ri";
import {
  PiBatteryChargingVertical,
  PiElevator,
  PiTelevisionSimpleLight,
} from "react-icons/pi";
import {
  GiBurningDot,
  GiFamilyHouse,
  GiForklift,
  GiGardeningShears,
  GiKidSlide,
  GiNuclearWaste,
  GiParkBench,
  GiPoliceOfficerHead,
  GiWaterTank,
} from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { TbBusStop } from "react-icons/tb";
import { GrCompliance, GrHostMaintenance } from "react-icons/gr";
import Services from "../../components/Services";
import NearbyProperties from "../Buy/NearbyProperties/NearbyProperties";

const CardDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="px-4 flex items-center justify-between w-1/2 font-inter">
        <div>
          <h2 className="card-title text-xl font-semibold">
            SunnySlope Suites
          </h2>
          <div className="flex items-center gap-1 font-poppins">
            <IoLocationOutline className="text-lg  text-[#EE6611]" />
            <p className="font-normal text-lg text-[#606060]">
              Meadowshire Park, Greenfield, USA
            </p>
          </div>
        </div>
        <p className=" text-2xl font-extrabold my-4">$250000</p>
      </div>
      <hr className="w-1/2 my-2" />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="font-mont">
          <img src={img1} alt="" />
          <div className="mt-6 p-3 bg-[#F9FAFB]">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div className="grid lg:grid-cols-4 shadow-xl mt-5 p-5 border-x-0 border-x-gray-200">
              <div className="flex items-center gap-2">
                <FaBed />
                <p>2 Beds</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBath />
                <p>2 Bath</p>
              </div>
              <div className="flex items-center gap-2">
                <MdBalcony />
                <p>2 Balcony</p>
              </div>
              <div className="flex items-center gap-2">
                <RiArchiveDrawerLine />
                <p>Fully Furnished</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 font-mont my-7 p-3 justify-around">
              <div>
                <p className="text-[#5c5c5c] font-normal">Carpet Area</p>
                <p className="font-medium">2000 sqft</p>
                <p className="text-[#535353] text-sm font-normal">$ 225/sqft</p>
              </div>
              <div>
                <p className="text-[#5c5c5c] font-normal">Floor</p>
                <p className="font-medium">Second (Out of 6th floor)</p>
              </div>
              <div>
                <p className="text-[#5c5c5c] font-normal">Transaction Type</p>
                <p className="font-medium">Ready to move</p>
              </div>
              <div>
                <p className="text-[#5c5c5c] font-normal">Lift</p>
                <p className="font-medium">1</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 font-mont my-7 p-3 justify-around">
              <div>
                <p className="text-[#5c5c5c] font-normal">Facing</p>
                <p className="font-medium">North - East</p>
              </div>
              <div>
                <p className="text-[#5c5c5c] font-normal">Additional Rooms</p>
                <p className="font-medium">1 servant room & 1 gust room</p>
              </div>
              <div>
                <p className="text-[#5c5c5c] font-normal">
                  Age of construction
                </p>
                <p className="font-medium">New Construction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-[#ECF5FF]">
            <div className="p-4 flex-col">
              <p className="font-poppins text-gray-500 font-normal mb-3">
                property value
              </p>
              <h3 className="font-mont font-bold text-2xl mb-4">
                $ 300k - $ 310k
              </h3>
              <p className="font-poppins text-gray-500 font-medium mb-3">
                Your bid can not be than 10% of the property Minimum value.
              </p>
              <div className="card w-full max-w-md shrink-0">
                <form className="font-poppins">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Min</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Min price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Max</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Max price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max="100"
                    value="0"
                    className="range range-sm mt-6 bg-[#EE6611]"
                  />
                  <div className="text-center mt-6">
                    <button className="fon-mont text-lg bg-[#0059B1] text-white rounded-md py-3 px-6">
                      Bid Property
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 p-3 bg-[#F9FAFB]">
        <h2 className="text-2xl font-semibold">Amenities</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 font-mont my-7 p-3 justify-around">
          <div className="flex items-center gap-2">
            <PiBatteryChargingVertical />
            <p className="font-medium">Power Back Up</p>
          </div>
          <div className="flex items-center gap-2">
            <PiElevator />
            <p className="font-medium">Lift</p>
          </div>
          <div className="flex items-center gap-2">
            <GiFamilyHouse />
            <p className="font-medium">Club House</p>
          </div>
          <div className="flex items-center gap-2">
            <CgGym />
            <p className="font-medium">Gymnasium</p>
          </div>
          <div className="flex items-center gap-2">
            <GiParkBench />
            <p className="font-medium">Park</p>
          </div>
          <div className="flex items-center gap-2">
            <TbBusStop />
            <p className="font-medium">Reserved Parking</p>
          </div>
          <div className="flex items-center gap-2">
            <GiPoliceOfficerHead />
            <p className="font-medium">Security</p>
          </div>
          <div className="flex items-center gap-2">
            <GiWaterTank />
            <p className="font-medium">Water Storage</p>
          </div>
          <div className="flex items-center gap-2">
            <GiGardeningShears />
            <p className="font-medium">Private Terrace/Garden</p>
          </div>
          <div className="flex items-center gap-2">
            <GrCompliance />
            <p className="font-medium">Vaastu Compliant</p>
          </div>
          <div className="flex items-center gap-2">
            <GiForklift />
            <p className="font-medium">Service/Goods Lift</p>
          </div>
          <div className="flex items-center gap-2">
            <FaParking />
            <p className="font-medium">Visitor Parking</p>
          </div>
          <div className="flex items-center gap-2">
            <FaIntercom />
            <p className="font-medium">Intercom Facility</p>
          </div>
          <div className="flex items-center gap-2">
            <GrHostMaintenance />
            <p className="font-medium">Maintenance Staff</p>
          </div>
          <div className="flex items-center gap-2">
            <GiNuclearWaste />
            <p className="font-medium">Waste Disposal</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLocalLaundryService />
            <p className="font-medium">Laundry Service</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWifi />
            <p className="font-medium">Internet/Wi-Fi Connectivity</p>
          </div>
          <div className="flex items-center gap-2">
            <PiTelevisionSimpleLight />
            <p className="font-medium">DTH Television Facility</p>
          </div>
          <div className="flex items-center gap-2">
            <GiBurningDot />
            <p className="font-medium">Piped Gas</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWalking />
            <p className="font-medium">Jogging and Strolling Track</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineSportsTennis />
            <p className="font-medium">Outdoor Tennis Courts</p>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap />
            <p className="font-medium">Early Learning Centre</p>
          </div>
          <div className="flex items-center gap-2">
            <GiKidSlide />
            <p className="font-medium">Kids Play Area</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineSportsTennis />
            <p className="font-medium">Indoor Squash & Badminton Courts</p>
          </div>
        </div>
      </div>
      <Services/>
      <NearbyProperties/>
      <hr className="mb-20 mt-4"/>
    </div>
  );
};

export default CardDetails;
