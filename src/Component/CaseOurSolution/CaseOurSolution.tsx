const CaseOurSolution = () => {
    return (
        <div className="p-10">
            <div className="w-full p-6 bg-white-100">
                <h2 className="text-4xl font-bold text-gray-800">
                    Our Solution
                </h2>
                <p className="mt-2 text-xl mt-4 text-gray-600">
                    After a detailed discussion of the brand’s concerns we understood the critical importance of implementing cybersecurity measures in safeguarding sensitive customer data, maintaining regulatory compliance, and preserving brand reputation.

                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 ">
                {/* Card 1 */}
                <div className="border-2 border-blue-500 p-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <div className="text-2xl font-bold  mb-2">1</div>
                    <h3 className="text-lg font-semibold mb-2">Endpoint Security</h3>
                    <p className="text-gray-600 hover:text-white">Our team deployed advanced endpoint protection solutions to safeguard desktops, laptops, and mobile devices from malware, ransomware, and other cyber threats.</p>
                </div>

                {/* Card 2 */}
                <div className="border-2 border-blue-500 p-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <div className="text-2xl font-bold  mb-2">2</div>
                    <h3 className="text-lg font-semibold mb-2">Network Security</h3>
                    <p className="text-gray-600 hover:text-white">We implemented robust network security measures, including firewalls, intrusion detection systems (IDS), and secure VPN (Virtual Private Network) connections, to protect against unauthorised access and network-based attacks.</p>
                </div>

                {/* Card 3 */}
                <div className="border-2 border-blue-500 p-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <div className="text-2xl font-bold  mb-2">3</div>
                    <h3 className="text-lg font-semibold mb-2">Security Awareness Training</h3>
                    <p className="text-gray-600 hover:text-white">We implemented robust network security measures, including firewalls, intrusion detection systems (IDS), and secure VPN (Virtual Private Network) connections, to protect against unauthorised access and network-based attacks..</p>
                </div>

                {/* Card 4 */}
                <div className="border-2 border-blue-500 p-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <div className="text-2xl font-bold  mb-2">4</div>
                    <h3 className="text-lg font-semibold mb-2">Incident Response and Forensics</h3>
                    <p className="text-gray-600 hover:text-white">Our data experts also took care of incident response and forensics capabilities to detect, respond to, and recover from cybersecurity incidents effectively, minimising the impact on business operations and data integrity.</p>
                </div>
            </div>

        </div>

    )
};

export default CaseOurSolution;