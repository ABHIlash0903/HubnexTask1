import { useEffect, useState } from "react";
import "./CaseImpact.css"
import AnimatedCircularProgressBar from "../../components/ui/animated-circular-progress-bar";

const CaseImpact = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue1(handleIncrement);
        const interval = setInterval(() => setValue1(handleIncrement), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue2(handleIncrement);
        const interval = setInterval(() => setValue2(handleIncrement), 600);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue3(handleIncrement);
        const interval = setInterval(() => setValue3(handleIncrement), 1600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-10 ">
            <div className="w-full p-6 bg-white-100">
                <h2 className="text-4xl font-bold text-gray-800">
                    Impact
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.

                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center p-6 bg-white-100 grid grid-cols-1 md:grid-cols-[10%_1fr] gap-4 ">
                {/* Prograssive-bar Column */}
                <div className="md:w-100">
                            <AnimatedCircularProgressBar
                                className='circular-progress'
                                max={100}
                                min={0}
                                value={value1}
                                gaugePrimaryColor='rgb(79 70 229)'
                                gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
                            />
                </div>
                <div className="w-full p-6 bg-white-100">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Enhanced Patient Engagement:
                    </h2>
                    <p className="mt-2 text-xl text-gray-600">
                        We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.
                    </p>
                </div>


                <div className="md:w-100">
                    
                            <AnimatedCircularProgressBar
                                className='circular-progress'
                                max={100}
                                min={0}
                                value={value2}
                                gaugePrimaryColor='rgb(79 70 229)'
                                gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
                            />
                       
                </div>
                <div className="w-full p-6 bg-white-100 ">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Improved Treatment Adherence:
                    </h2>
                    <p className="mt-2 text-xl text-gray-600">
                        Positive feedback from healthcare providers regarding improved patient adherence to treatment plans and therapy sessions was facilitated through the mobile application, resulting in more effective therapy outcomes.
                    </p>
                </div>

                <div className="md:w-100">
                   
                            <AnimatedCircularProgressBar
                                className='circular-progress'
                                max={100}
                                min={0}
                                value={value3}
                                gaugePrimaryColor='rgb(79 70 229)'
                                gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
                            />
                        
                </div>
                <div className="w-full p-6 bg-white-100">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Performance Scalability:
                    </h2>
                    <p className="mt-2 text-xl text-gray-600">
                        Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity helped us ensure uninterrupted service availability and user satisfaction.
                    </p>
                </div>

            </div>

        </div>

    )
};

export default CaseImpact;