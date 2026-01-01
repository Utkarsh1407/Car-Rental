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
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-light">
      <h1 className="font-bold text-4xl pb-6">Luxury Cars on Rent</h1>

      {/* FORM */}
      <form
        onSubmit={handleSearch}
        className="
          w-full max-w-220
          bg-white shadow-lg
          rounded-2xl md:rounded-full
          px-4 py-4 md:px-10
          flex flex-col md:flex-row
          gap-4 md:gap-6
          items-stretch md:items-end
        "
      >
        {/* Inputs */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1">
          {/* City */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-gray-700 mb-2">
              Select City
            </label>
            <select
              className="
                h-11 px-4 rounded-md border border-gray-300
                bg-white text-sm text-gray-800
                focus:outline-none focus:ring-2 focus:ring-black
              "
              onChange={(e) => setPickupLocation(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                London
              </option>
              <option value="San Francisco">San Francisco</option>
              <option value="Miami">Miami</option>
              <option value="Florida">Florida</option>
            </select>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-2">Pickup Date</label>
            <input
              required
              value={pickupDate}
              type="date"
              className="h-11 border rounded-md px-3 w-full"
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium mb-2">Return Date</label>
            <input
              required
              value={returnDate}
              type="date"
              className="h-11 border rounded-md px-3 w-full"
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            flex items-center justify-center gap-2
            bg-primary hover:bg-primary-dull
            text-white font-medium
            px-10 py-3
            rounded-full
            w-full md:w-auto
          "
        >
          <Search className="h-5" />
          Search
        </button>
      </form>

      {/* Image */}
      <div className="mt-10">
        <img src={hero_car} alt="car" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;