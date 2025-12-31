import React, { useState } from "react";
import { DatePicker } from "./ui/DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Search} from "lucide-react"
import hero_car from "../assets/hero_car.png"
import { useAppContext } from "../../context/AppContext";

const Hero = () => {
  const {axios} = useAppContext()

  const [pickupLocation, setPickupLocation] = useState("")

  const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("call hua")
    navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center text-center flex-col px-4 bg-light">
        <h1 className="font-bold text-4xl pb-6">Luxury Cars on Rent</h1>
        <form
          onSubmit={handleSearch}
          className="p-4 flex w-full md:max-w-220 items-center justify-center gap-4 shadow-lg bg-white rounded-full max-md:flex-col max-md:rounded-2xl"
        >
          <div className="flex flex-col font-bold gap-3">
            <p>Select City</p>
            <Select>
              <SelectTrigger className="w-45">
                <SelectValue placeholder="London" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
                <SelectItem value="Miami">Miami</SelectItem>
                <SelectItem value="Florida">Florida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col font-bold ">
            <p>Pick-Up Date</p>
            <DatePicker ></DatePicker>
          </div>
          <div className="flex flex-col font-bold ">
            <p>Return Date</p>
            <DatePicker></DatePicker>
          </div>
          <button className="flex gap-2 items-center justify-center cursor-pointer border rounded-4xl bg-primary hover:bg-primary-dull cursor pointer text-white px-9 py-3">
            <Search className="h-6"/>
            Search
          </button>
        </form>
        <div className="rounded-3xl ">
          <img src={hero_car} alt="car" className="w-2xl"/>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
