export const dummycardata = 
    [
  {
    "_id": "67ff6b758f1b3684286a2a65",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "brand": "Toyota",
    "model": "Corolla",
    "image": "car_image1",
    "year": 2021,
    "category": "Sedan",
    "seating_capacity": 4,
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "pricePerDay": 130,
    "location": "Chicago",
    "description": "The Toyota Corolla is a reliable and fuel-efficient sedan, ideal for city and highway travel.",
    "isAvailable": true,
    "createdAt": "2025-04-16T08:33:57.993Z"
  },
  {
    "_id": "67ff6b758f1b3684286a2a66",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "brand": "Honda",
    "model": "Civic",
    "image": "car_image2",
    "year": 2020,
    "category": "Sedan",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 150,
    "location": "New York",
    "description": "Honda Civic offers sporty performance with excellent comfort and safety features.",
    "isAvailable": true,
    "createdAt": "2025-04-17T10:12:45.112Z"
  },
  {
    "_id": "67ff6b758f1b3684286a2a67",
    "owner": "67fe3467ed8a8fe17d0ba6e3",
    "brand": "Hyundai",
    "model": "Creta",
    "image": "car_image3",
    "year": 2022,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "pricePerDay": 190,
    "location": "Los Angeles",
    "description": "Hyundai Creta is a compact SUV with modern design, advanced features, and smooth driving experience.",
    "isAvailable": false,
    "createdAt": "2025-04-18T14:20:09.450Z"
  },
  {
    "_id": "67ff6b758f1b3684286a2a68",
    "owner": "67fe3467ed8a8fe17d0ba6e4",
    "brand": "Tesla",
    "model": "Model 3",
    "image": "car_image4",
    "year": 2023,
    "category": "Electric",
    "seating_capacity": 5,
    "fuel_type": "Electric",
    "transmission": "Automatic",
    "pricePerDay": 280,
    "location": "San Francisco",
    "description": "Tesla Model 3 is a premium electric car offering cutting-edge technology and zero emissions.",
    "isAvailable": true,
    "createdAt": "2025-04-19T09:05:31.821Z"
  },
  {
    "_id": "67ff6b758f1b3684286a2a69",
    "owner": "67fe3467ed8a8fe17d0ba6e5",
    "brand": "Ford",
    "model": "Mustang",
    "image": "car_image5",
    "year": 2019,
    "category": "Sports",
    "seating_capacity": 4,
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "pricePerDay": 320,
    "location": "Miami",
    "description": "Ford Mustang is a classic American muscle car delivering high performance and bold styling.",
    "isAvailable": true,
    "createdAt": "2025-04-20T18:47:02.300Z"
  }
]

export const dummyuserdata = {
    "_id" : "6856fe3467ed8a817d0ba6e5",
    "name" : "DEMO USER",
    "email" : "admin@gmail.com",
    "role" : "owner",
    "image" : "user_profile"
}


export const dummyDashboardData = {
  totalCars: 18,
  totalBooking: 142,
  pendingBookings: 7,
  completedBookings: 119,
  monthlyRevenue: 28450,

  recentBookings: [
    {
      id: 1,
      carName: "BMW 3 Series",
      bookingDate: "2025-04-01",
      amount: 475,
      status: "Confirmed",
    },
    {
      id: 2,
      carName: "Ford Explorer",
      bookingDate: "2025-03-01",
      amount: 425,
      status: "Completed",
    },
    {
      id: 3,
      carName: "Toyota Corolla",
      bookingDate: "2025-04-05",
      amount: 225,
      status: "Pending",
    },
    {
      id: 4,
      carName: "Tesla Model 3",
      bookingDate: "2025-04-06",
      amount: 360,
      status: "Confirmed",
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68482bb598eb9722b7751f60",
    car: dummycardata[1],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-12T00:00:00.000Z",
    returnDate: "2025-06-14T00:00:00.000Z",
    status: "pending",
    price: 130,
    createdAt: "2025-06-10T12:57:25.613Z"
  },
  {
    _id: "68482bb598eb9722b7751f61",
    car: dummycardata[3],
    user: "6847f7cab3d8daecdb517096",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-07-01T00:00:00.000Z",
    returnDate: "2025-07-05T00:00:00.000Z",
    status: "approved",
    price: 480,
    createdAt: "2025-06-15T09:30:10.221Z"
  },
  {
    _id: "68482bb598eb9722b7751f62",
    car: dummycardata[0],
    user: "6847f7cab3d8daecdb517097",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-08-10T00:00:00.000Z",
    returnDate: "2025-08-12T00:00:00.000Z",
    status: "cancelled",
    price: 90,
    createdAt: "2025-06-20T18:45:00.000Z"
  }
];

 
