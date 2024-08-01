import { AiFillPropertySafety } from "react-icons/ai";

const Services = () => {
    return (
        <div className="container mx-auto mt-20">
            <h2 className="text-center text-4xl font-semibold">Other Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-20 mt-8 p-3">
                <div className="bg-[#ECF5FF] flex gap-3 p-4 rounded-sm">
                    <div>
                        <AiFillPropertySafety className="text-[#EE6611] text-4xl"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Advanced Property Search</h3>
                        <p className="text-neutral-500">Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] flex gap-3 p-4 rounded-sm">
                    <div>
                        <AiFillPropertySafety className="text-[#EE6611] text-4xl"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Virtual Tours and Multimedia</h3>
                        <p className="text-neutral-500">Explore properties through immersive virtual tours abd HD photos.</p>
                    </div>
                </div>
                <div className="bg-[#ECF5FF] flex gap-3 p-4 rounded-sm">
                    <div>
                        <AiFillPropertySafety className="text-[#EE6611] text-4xl"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Secure Online Transections</h3>
                        <p className="text-neutral-500">Ensure secure transections and e-sign documnets seamlessly online.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;