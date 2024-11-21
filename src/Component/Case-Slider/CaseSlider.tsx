import React, { useRef } from "react";

const CaseSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number, scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only proceed if left mouse button is pressed
    isDragging = true;
    startX = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="py-10">
      <div className="text-center space-y-2">
        <p className="text-sm text-blue-600">3940+ Happy Hubnex Labs Users</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Driving results for leaders across the globe
        </h1>
      </div>

      <div
        ref={sliderRef}
        className="relative flex gap-4 overflow-x-auto max-w-5xl mx-auto mt-10 p-4 scrollbar-hide scroll-snap-x"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-4/5 lg:w-2/3 scroll-snap-center bg-blue-100 rounded-lg shadow-lg p-5 space-y-4"
          >
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <img
                src={`/public/example${index + 1}.png`}
                alt={`example ${index + 1}`}
                className="w-full md:w-1/2 h-auto rounded-lg object-cover"
              />
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Driving results for leaders across the globe
                </h1>
                <p className="text-sm text-gray-600">
                  “With Landingfolio, the design team can now build designs that
                  identify employees’ career aspirations and goals, helping
                  managers to understand and act accordingly.”
                </p>
                <div>
                  <h2 className="text-lg font-bold">Example Company</h2>
                  <p className="text-sm text-gray-500">Product Company</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSlider;
