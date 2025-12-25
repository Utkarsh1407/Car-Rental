import React from "react";

const CarCard = ({car}) => {
    return <>
        <div className="flex flex-col gap-2 rounded-xl shadow-lg">
            <div className="relative h-48">
                <img src={car.image} alt="" className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col justify-between px-4 pb-2">
                <h2 className="text-lg font-medium"> {car.brand} {car.model} </h2>
                <h3 className="text-sm"> {car.category} {car.year}</h3>
            </div>

            <div className="grid grid-cols-2 gap-y-2 px-4 pb-2">
                <div>
                    <img src="" alt="" />
                    <span>{car.seating_capacity}</span>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>{car.fuel_type}</span>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>{car.transmission}</span>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>{car.location}</span>
                </div>
            </div>
        </div>
    </>
    

}

export default CarCard