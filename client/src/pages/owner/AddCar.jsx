import { useAppContext } from "../../../context/AppContext";
import { useState } from "react";
import toast from "react-hot-toast"


const AddCar = () => {

  const {axios} = useAppContext()
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: "",
    location: "",
    features: [],
    description: ""
  });

  const [image,setImage] = useState(null)


  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const addFeature = () => {
    if (!featureInput.trim()) return;
    setCar({
      ...car,
      features: [...car.features, featureInput.trim()],
    });
    setFeatureInput("");
  };

  const removeFeature = (index) => {
    setCar({
      ...car,
      features: car.features.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))

      const {data} = await axios.post("/api/owner/add-car", formData);

      if (data.success) {
        toast.success("Your car has been added");
        setImage(null);

        setCar({
          brand: "",
          model: "",
          year: "",
          pricePerDay: "",
          category: "",
          transmission: "",
          fuel_type: "",
          seating_capacity: "",
          location: "",
          features: [],
          description: ""
        })
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Add New Car</h1>
      <p className="text-gray-500 mt-1">
        Fill in details to list a new car for booking, including pricing,
        availability, and car specifications.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">

        {/* Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Brand" name="brand" placeholder="e.g. BMW, Mercedes, Audi" onChange={handleChange} />
          <Input label="Model" name="model" placeholder="e.g. X5, E-Class, M4" onChange={handleChange} />
        </div>

        {/* Year, Price, Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input type="number" label="Year" name="year" placeholder="2025" onChange={handleChange} />
          <Input type="number" label="Daily Price ($)" name="pricePerDay" placeholder="100" onChange={handleChange} />
          <Input label="Category" name="category" placeholder="Sedan" onChange={handleChange} />
        </div>

        {/* Transmission, Fuel, Seats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input label="Transmission" name="transmission" placeholder="Automatic" onChange={handleChange} />
          <Input label="Fuel Type" name="fuel_type" placeholder="Diesel" onChange={handleChange} />
          <Input type="number" label="Seating Capacity" name="seating_capacity" placeholder="5" onChange={handleChange} />
        </div>

        {/* Location */}
        <Input
          label="Location"
          name="location"
          placeholder="e.g. San Francisco, CA"
          onChange={handleChange}
        />

        {/* Features */}
        <div>
          <label className="block text-sm font-medium mb-2">Features</label>
          <div className="flex gap-3">
            <input
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="e.g. Leather Seats, Navigation, Bluetooth"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={addFeature}
              className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {car.features.map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {feature}
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe your car, its condition, and any notable details..."
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image</label>
          <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

/* Reusable Input Component */
const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      {...props}
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default AddCar;
