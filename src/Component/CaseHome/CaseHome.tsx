
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
                    <h2 className="text-2xl font-bold text-gray-800">How cybersecurity solutions helped an insurance company</h2>
                    <p className="text-gray-600 mt-4">
                        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.landing page or admin panel for your SaaS.landing page.
                    </p>

                    <div className="flex p-6 space-x-4">
                        {/* First Column */}
                        <div className="w-1/3 bg-gray-100 p-4 rounded-md">
                            <h2 className="text-lg font-bold"> 1</h2>
                            <p> content </p>
                        </div>

                        {/* Second Column */}
                        <div className="w-1/3 bg-gray-100 p-4 rounded-md">
                            <h2 className="text-lg font-bold"> 2</h2>
                            <p>content</p>
                        </div>

                        {/* Third Column */}
                        <div className="w-1/3 bg-gray-100 p-4 rounded-md">
                            <h2 className="text-lg font-bold"> 3</h2>
                            <p>content</p>
                        </div>
                    </div>

                    <div className="flex p-6 space-x-4">
                        {/* First Column */}
                        <div className="w-1/3 p-4 rounded-md  mt-10  items-center justify-between pr-2">
                            <div className="flex flex-col items-start justify-start text-purple-700 text-2xl lg:text-5xl">
                                <span className="text-[#064E3B]">
                                    <span className="font-semibold tracking-wider">78.6</span>%
                                </span>
                                <p className="text-xs lg:text-lg text-gray-600">Better
                                    <br></br>
                                    Data Protection</p>
                            </div>
                        </div>

                        {/* Second Column */}
                        <div className="w-1/3 p-4 rounded-md  mt-10  items-center justify-between pr-2">
                            <div className="flex flex-col items-start justify-start text-purple-700 text-2xl lg:text-5xl">
                                <span className="text-[#064E3B]">
                                    <span className="font-semibold tracking-wider">50.6</span>%
                                </span>
                                <p className="text-xs lg:text-lg text-gray-600">Improvement in
                                    <br></br>
                                    Regulatory Compliance</p>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="w-1/3 p-4 rounded-md  mt-10  items-center justify-between pr-2">
                            <div className="flex flex-col items-start justify-start text-purple-700 text-2xl lg:text-5xl">
                                <span className="text-[#064E3B]">
                                    <span className="font-semibold tracking-wider">25.6</span>%
                                </span>
                                <p className="text-xs lg:text-lg text-gray-600">Phishing
                                    <br></br>
                                    Mitigation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div className="md:w-1/2">

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