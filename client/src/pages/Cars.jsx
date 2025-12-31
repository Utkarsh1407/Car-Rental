import { dummycardata } from "@/assets/assets";
import React from "react";
import CarCard from "../components/CarCard";
import { useAppContext } from "../../context/AppContext";

const Cars = () => {

  const {cars, axios} = useAppContext()


  return (
    <>
      <div>
        <div className="flex flex-col h-50 md:h-65 bg-light items-center justify-center gap-6 px-4">
          <div className="gap-2 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Available Cars</h1>
            <h2>
              Browse our selection of premium vehicles available for your next
              adventure
            </h2>
          </div>
          
          <div className="flex items-center shadow pl-4 gap-2 h-11 rounded-full overflow-hidden max-w-140 bg-white w-full">
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
              className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm "
            />
          </div>
        </div>

        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
          <p className="text-gray-500">Showing {cars.length} Cars</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {cars.map((car,index) => (
              <div key={index}>
                <CarCard car={car}/>
              </div>
            ))}

          </div>
        </div>

      </div>
    </>
  );
};

export default Cars;
