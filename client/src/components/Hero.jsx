import React, { useState } from "react";
import { Search } from "lucide-react";
import hero_car from "../assets/hero_car.png";
import { useAppContext } from "../../context/AppContext";

const Hero = () => {
  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } =
    useAppContext();

  const [pickupLocation, setPickupLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/cars?pickupLocation=${pickupLocation}&pickupDate=${pickupDate}&returnDate=${returnDate}`
    );
  };

  return (
    <div className="bg-light px-4 py-12">
      <h1 className="font-bold text-4xl text-center mb-10">
        Luxury Cars on Rent
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSearch}
        className="
          mx-auto
          w-full max-w-4xl
          bg-white shadow-lg
          rounded-full
          px-6 py-6

          flex flex-col
          gap-4

          md:flex-row
          md:items-end
          md:gap-6
        "
      >
        {/* City */}
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold mb-2">Select City</label>
          <select
            required
            defaultValue=""
            onChange={(e) => setPickupLocation(e.target.value)}
            className="h-11 border rounded-md px-3"
          >
            <option value="" disabled>Select City</option>
            <option value="London">London</option>
            <option value="Miami">Miami</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>

        {/* Pickup */}
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium mb-2">Pickup Date</label>
          <input
            type="date"
            required
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="h-11 border rounded-md px-3"
          />
        </div>

        {/* Return */}
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium mb-2">Return Date</label>
          <input
            type="date"
            required
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="h-11 border rounded-md px-3"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            bg-primary text-white
            px-10 py-3
            rounded-3xl
            w-full md:w-auto flex items-center 
          "
        >
          <Search className="inline-block mr-2 h-5" />
          Search
        </button>
      </form>

      <div className="mt-14 flex justify-center">
        <img
          src={hero_car}
          alt="car"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
