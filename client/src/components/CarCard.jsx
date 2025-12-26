import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Fuel, CarFront, MapPin } from "lucide-react";

const CarCard = ({car}) => {
    const navigate = useNavigate();
    return <>
        <div className="flex flex-col gap-2 rounded-xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-1" onClick={() => {
            navigate(`/car-details/${car._id}`) ; 
            scrollTo(0,0) 
        }}>
            <div className="relative h-48">
                <img src={car.image} alt="" className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col justify-between px-4 pb-2">
                <h2 className="text-lg font-medium"> {car.brand} {car.model} </h2>
                <h3 className="text-sm"> {car.category} {car.year}</h3>
            </div>

            <div className="grid grid-cols-2 gap-y-2 px-4 pb-2 text-gray-500 text-sm">
                <div className="flex gap-2 text-muted-foreground items-center">
                    <User className="h-4"></User>
                    <span>{car.seating_capacity}</span>
                </div>
                <div className="flex gap-2 text-muted-foreground items-center">
                    <Fuel className="h-4"></Fuel>
                    <span>{car.fuel_type}</span>
                </div>
                <div className="flex gap-2 text-muted-foreground items-center">
                    <CarFront className="h-4"></CarFront>
                    <span>{car.transmission}</span>
                </div>
                <div className="flex gap-2 text-muted-foreground items-center">
                    <MapPin className="h-4"></MapPin>
                    <span>{car.location}</span>
                </div>
            </div>
        </div>
    </>
    

}

export default CarCard