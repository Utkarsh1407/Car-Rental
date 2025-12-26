import { dummycardata } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import car1 from "../assets/car1.jpeg";
import { User, Fuel, CarFront, MapPin } from "lucide-react";
import Loader from "../components/Loader"

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    setCar(dummycardata.find((car) => car._id === id));
  }, [id]);

  const HandleSub = async(e) => {
        e.preventDefault()
  }

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-8 items-start">
        {/* left div  */}
        <div className="lg:col-span-2 ">
          <img
            src={car1}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover mb-6"
          />
          <div className="space-y-6">
            <div>
              <h1 className="font-bold text-3xl ">
                {car.brand} {car.model}
              </h1>
              <p className="text-lg text-gray-500">
                {car.category} {car.year}
              </p>
            </div>
            <hr className="border-gray-800 my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  Icon: User,
                  text: `${car.seating_capacity} Seats`,
                },
                { Icon: Fuel, text: car.fuel_type },
                { Icon: CarFront, text: car.transmission },
                { Icon: MapPin, text: car.location },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-300"
                >
                  <Icon className="h-5 w-5 mb-2" />
                  {text}
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-md font-bold mb-2">Description</h2>
              <p>{car.description}</p>
            </div>
          </div>
        </div>
        {/* right div */}
        <form className="p-4 flex sticky flex-col gap-6 top-18 border rounded-2xl shadow-lg " onSubmit={HandleSub}>
          <div className="flex items-center justify-between"> 
            <h1 className="font-bold">$130</h1>
            <h1 className="text-gray-600">per day</h1>
          </div>
          <hr className="border border-gray-400 "/>
          <div className="w-full">
            <label htmlFor="pickup-date" className="block mb-2 font-medium">Pickup Date</label>
            <input required id="pickup-date" type="date" className="border rounded px-3 py-2 w-full " />
          </div>
          <div className="w-full">
            <label htmlFor="return-date" className="block mb-2 font-medium">Return Date</label>
            <input required id="return-date" type="date" className="border rounded px-3 py-2 w-full" />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-2xl cursor-pointer">Book Now</button>
        </form>
      </div>
    </div>
  ) : (
    <Loader/>
  );
};

export default CarDetails;
