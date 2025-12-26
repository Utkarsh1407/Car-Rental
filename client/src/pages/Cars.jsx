import React from "react";

const Cars = () => {
  return (
    <>
      <div>
        <div className="flex flex-col h-40 md:h-65 bg-light items-center justify-center gap-2 px-4">
          <h1 className="text-4xl font-bold">Available Cars</h1>
          <h2>
            Browse our selection of premium vehicles available for your next
            adventure
          </h2>
          <div className="flex z-50 items-center border pl-4 gap-2 border-gray-500/30 h-11 rounded-full overflow-hidden max-w-md w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 30 30"
              fill="#6B7280"
            >
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
