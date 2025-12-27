import { dummycardata } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import { Eye,Trash,EyeOff } from 'lucide-react'

const ManageCars = () => {
  const [cars,setCars] = useState([])
  const fetchCars= async () => {
    setCars(dummycardata)
  }
  useEffect(() => {
    fetchCars()
  },[]) 
  return (
    <div className='mx-6 md:mx-12 pt-6'>
        <h1 className='text-4xl pb-2'>Manage Cars</h1>
        <p>View all listed cars,update their details or remove them.</p>
        <div className='mt-6 border border-borderColour'>
          <table className='w-full shadow-lg border-collapse text-left text-sm'>
            <thead>
              <tr>
                <th className='p-3 font-medium'>Car</th>
                <th className='p-3 font-medium max-md:hidden'>Category</th>
                <th className='p-3 font-medium'>Price</th>
                <th className='p-3 font-medium'>Status</th>
                <th className='p-3 font-medium'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                  <tr key={car._id} className='border border-borderColour '>
                    <td className=' p-3'>
                      <div className='flex gap-2 items-center'>
                        <img src={car.image} alt="" className="h-12 w-20 object-cover rounded"/>
                        <div>
                          <p>{car.brand} {car.model}</p>
                          <p>{car.seating_capacity} seats {car.transmission}</p>
                        </div>
                      </div>
                      <div>

                      </div>
                    </td>
                    <td className='p-3 max-md:hidden'>{car.category}</td>
                    <td className='p-3'>{car.pricePerDay}</td>
                    <td className='p-3'>
                      <span> {car.isAvailable ? "Available" : "Not Available" } </span>
                    </td>
                    <td>
                      <div className='flex p-3 items-center gap-2'>
                        {car.isAvailable ? <EyeOff className='h-4 cursor-pointer'/> : <Eye className='h-4 cursor-pointer'/>}
                        <Trash className='h-4 cursor-pointer'/>
                      </div>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ManageCars
