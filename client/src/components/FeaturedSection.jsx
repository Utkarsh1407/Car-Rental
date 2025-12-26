import { useNavigate } from "react-router-dom"
import { dummycardata } from "../assets/assets"
import CarCard from "./CarCard"

const FeaturedSection = () => {
    const navigate = useNavigate()
    return <>
    <div className="flex flex-col gap-3 px-6 md:px-16 lg:px-36 py-10">
        <div className="flex flex-col text-center justify-center items-center gap-y-2">
            <h1 className="font-bold text-4xl">Featured Vehicles</h1>
            <p className="text-sm text-gray-500/90">Explore our selection of premium vehicles available for your next adventure.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
        {
            dummycardata.slice(0,6).map((car) => (
                <div key={car._id}>
                    <CarCard car={car} />
                </div>
            ))
        }
        </div>

        <button onClick={() =>{
            navigate('/cars'); scrollTo(0,0);
        }} className="flex items-center justify-center self-center border border-bordercolor px-6 py-2 mt-18 cursor-pointer">
            Explore all cars
        </button>
    </div>
    </>
}
export default FeaturedSection