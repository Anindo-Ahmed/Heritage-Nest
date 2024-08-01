import employee1 from "../assets/images/Rectangle 29.png";
import employee2 from "../assets/images/Rectangle 30.png";
import employee3 from "../assets/images/Rectangle 31.png";
import img from "../assets/images/Rectangle 30-1.png";
import Testimonials from "./Testimonials";

const Team = () => {
  return (
    <div className="container mx-auto mt-48 p-4 mb-14">
      <div className="flex items-center gap-2">
        <hr className="border-2 w-12 border-[#F06711]" />
        <p className="text-[#F06711] font-semibold">Mission Statement</p>
      </div>
      <h1 className="font-mont text-[40px] font-bold text-gray-900 my-4">
        Discover the Faces Behind Our Success
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <img src={employee1} alt="employee 1" />
        <img src={employee2} alt="employee 2" />
        <img src={employee3} alt="employee 3" />
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-between">
        <div >
          <div className="flex items-center gap-2">
            <hr className="border-2 w-12 border-[#F06711]" />
            <p className="text-[#F06711] font-semibold">
              Meet the Team For Book Consultation
            </p>
          </div>
          <h1 className="font-mont text-[40px] font-bold text-gray-900 my-4">
            Meet the stewards of your <br />heritage journey
          </h1>
          <p className="font-poppins text-gray-500 my-6 max-w-[696px]">
          each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
          </p>
          <button className="bg-[#0059B1] py-3 px-6 text-white font-mont font-semibold text-lg">Book Consultation Now</button>
        </div>
        <div >
            <img src={img} alt="image" className="w-[384px]"/>
        </div>
      </div>
      <Testimonials/>
    </div>
  );
};

export default Team;
