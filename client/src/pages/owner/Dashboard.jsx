import React from 'react'
import { useState, useEffect } from 'react'
import { dummyDashboardData } from '@/assets/assets'

const Dashboard = () => {
  const [data,setData] = useState({
    totalCars:0,
    totalBooking:0,
    pendingBookings:0,
    completedBookings:0,
    recentBookings:[],
    monthlyRevenue:0
  })

  const dashboardCards = [
    {title : "Total Cars", value : data.totalCars},
    {title : "Total Bookings", value : data.totalBooking},
    {title : "Pending Bookings", value : data.pendingBookings},
    {title : "Completed Bookings", value : data.completedBookings}
  ]
  
  useEffect(() => {
    setData(dummyDashboardData)
  }, [])

  return (
    <div className='mt-10 px-8'>
      <div className='flex flex-col items-start'>
        <h1 className='text-3xl font-medium'>Admin Dashboard</h1>
        <p className='text-sm text-gray-500 mt-2'>Monitor overall performance</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
      {
        dashboardCards.map(({title,value}) => (
          <div className='flex flex-col items-start justify-center border shadow px-4 py-3'>
            <h3 className='text-gray-500 text-sm'>{title}</h3>
            <h2 className='text-lg font-bold pt-2'>{value}</h2>
          </div>
        )
      )}
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-start'>
        <div className='flex flex-col col-span-2 border border-borderColour max-w-200 w-full py-6 px-2'>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-bold text-xl'>Recent Bookings</h2>
              <p className='text-sm'>Latest Customer Bookings</p>
            </div>
  
            <div className="mt-4 flex flex-col gap-4">
            {data.recentBookings.map(
              ({ id, carName, bookingDate, amount, status }) => (
                <div
                  key={id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  {/* Left: Car + Date */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      🚗
                    </div>

                    <div>
                      <p className="font-medium">{carName}</p>
                      <p className="text-sm text-gray-500">{bookingDate}</p>
                    </div>
                  </div>

                  {/* Middle: Amount */}
                  <div className='flex gap-2'>
                    <p className="font-medium">${amount}</p>

                  {/* Right: Status */}
                  <span className="px-3 py-1 text-sm rounded-full border">
                    {status}
                  </span>
                  </div>
                  
                </div>
              )
            )}
          </div>
        </div>

        <div className='flex flex-col border border-borderColour shadow pt-6 pb-3 px-2 items-center justify-center'>
          <h2 className='font-bold text-xl'>Monthly Revenue</h2>
          <p className='text-sm'>Revenue for current month</p>

          <h1 className='text-3xl font-bold text-green-700 mt-4'> $ {data.monthlyRevenue}</h1>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
