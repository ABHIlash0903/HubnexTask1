import NumberTicker from "../../components/ui/number-ticker";

const CaseHome = () => {
    return (
        <div className="p-10">
            <div className="flex items-center space-x-4 p-4 bg-white-100">
                <div className="text-gray-600 cursor-pointer">Home <span className="ml-1">&gt;</span></div>
                <div className="text-gray-600 cursor-pointer">Blogs <span className="ml-1">&gt;</span></div>
                <p className="text-black-800 font-medium">How cybersecurity solution helped an insurance company</p>
            </div>


            <div className="w-full flex flex-col md:flex-row items-center p-6 bg-white-100">
                {/* Text Column */}
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
                    <h1 className="text-5xl font-bold text-gray-800">How cybersecurity solutions helped an insurance company</h1>
                    <p className="text-gray-600 text-xl mt-4">
                        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.landing page or admin panel for your SaaS.landing page.
                    </p>

                    <div className="flex mt-4 space-x-4 ">
                        {/* First Column */}
                        <div className="flex p-2  space-x-1 ">
                            {/* First Column */}
                            <div className="p-2">
                                <img src="/public/Server.png" alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-lg font-bold text-[#064E3B]">Software</h2>
                                <p className="text-gray-600 mt-2">Industry</p>
                            </div>
                        </div>



                        {/* Second Column */}
                        <div className="flex p-2  space-x-1 ">
                            {/* First Column */}
                            <div className="p-2">
                                <img src="/public/user.png" alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-lg font-bold text-[#064E3B]">Cybersecurity Solutions</h2>
                                <p className="text-gray-600 mt-2">Service Provided</p>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="flex p-2  space-x-1 ">
                            {/* First Column */}
                            <div className="p-2">
                                <img src="/public/location.png" alt="" />
                            </div>
                            <div className="">
                                <h2 className="text-lg font-bold text-[#064E3B]">200-500</h2>
                                <p className="text-gray-600 mt-2">Company Size</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-4 space-x-4">
                        {/* First Column */}
                        <div className="w-1/3 p-4 rounded-md  mt-6  text-center  items-center justify-between pr-2">
                            <div className="flex flex-col justify-start text-purple-700 text-2xl lg:text-5xl">
                                <span className="text-[#064E3B]">
                                    <NumberTicker value={78.6} className='number-ticker text-[#064E3B] font-semibold'/> %
                                </span>
                                <p className="text-xs mt-2 lg:text-lg text-gray-600">Better
                                    <br></br>
                                    Data Protection</p>
                            </div>
                        </div>


                        {/* Second Column */}
                        <div className="w-1/3 p-4 rounded-md  mt-6 text-center items-center justify-between pr-2">
                            <div className="flex flex-col justify-start text-purple-700 text-2xl lg:text-5xl">
                                <span className="text-[#064E3B]">
                                    <NumberTicker value={50.6} className='number-ticker text-[#064E3B] font-semibold'/> %
                                </span>
                                <p className="text-xs mt-2 lg:text-lg  text-gray-600">Improvement in
                                    <br></br>
                                    Regulatory Compliance</p>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="w-1/3 p-4 rounded-md  mt-6 text-center items-center justify-between pr-2">
                            <div className="flex flex-col text-center justify-start text-purple-700 text-2xl lg:text-5xl">
                                <span className="text-[#064E3B]">
                                    <NumberTicker value={25.6} className='number-ticker text-[#064E3B] font-semibold'/> %
                                </span>
                                <p className="text-xs mt-2 lg:text-lg text-center text-gray-600">Phishing
                                    <br></br>
                                    Mitigation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div className="md:w-1/2 pl-20 pr-4">

                    <img
                        src='/public/Frame 21.png'
                        alt="Description of the image"
                        className="w-full h-auto rounded-md shadow-lg"
                    />
                </div>
            </div>


        </div>


    )
};

export default CaseHome;