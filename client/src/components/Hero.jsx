import React from "react";
import { DatePicker } from "./ui/DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Search} from "lucide-react"
import heroCar from "../assets/heroCar.jpeg"
const Hero = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-center flex-col px-4 bg-light">
        <h1 className="font-bold text-4xl pb-6">Luxury Cars on Rent</h1>
        <form
          action=""
          className="p-6 flex w-full md:max-w-220 items-center justify-center gap-8 shadow-lg bg-white rounded-full max-md:flex-col max-md:rounded-2xl"
        >
          <div className="flex flex-col font-bold gap-3">
            <p>Select City</p>
            <Select>
              <SelectTrigger className="w-45">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col font-bold ">
            <p>Pick-Up Date</p>
            <DatePicker></DatePicker>
          </div>
          <div className="flex flex-col font-bold ">
            <p>Return Date</p>
            <DatePicker></DatePicker>
          </div>
          <button className="flex gap-2 items-center justify-center cursor-pointer border border-black rounded-2xl bg-blue-400 text-white px-2 py-2">
            <Search className="h-6"/>
            Search
          </button>
        </form>
        <div className="mt-16">
          <img src={heroCar} alt="car" className="max-md:w-full max-h-74 h-auto"/>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
