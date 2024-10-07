import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { useBooking } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";
import { carData } from "../constants/Data";

interface FormData {
    location: string,
    city: string,
    carType: string
}

const Bookings:React.FC = () => {
    const [activeImage, setActiveImage] = useState(false)
    const {register, handleSubmit} = useForm<FormData>();
    const { setBooking } = useBooking();
    const navigate = useNavigate();

    const onSubmit = (data: FormData)=> {
        setBooking({
            location: data.location,
            city: data.city,
            carType: data.city,
            price: 20.0,
            paymentStatus: 'Pending',
        })
        navigate('/summary');
    }

        const handleActiveImage = () => {
            setActiveImage(prevState => !prevState);
        }

  return (
            <div className="p-10">
                <h1 className="font-bold text-3xl m-2 text-gray-800">Booking</h1>
                    <form onSubmit={handleSubmit(onSubmit)} 
                    className="flex col border border-green-500 w-[700px] h-[700px] rounded p-5 gap-2">
                        <input {...register('location')} placeholder="Enter Your Location" className="border rounded-md h-10 outline-none"/>
                        <input {...register('city')} placeholder="Enter Your City" className="border rounded-md h-10 outline-none"/>
                        <select {...register('carType')} className="border rounded-md h-10 outline-none">
                            <option value="Economy">Economy</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                        <button type="submit" className="bg-black"></button>
                        <h2 className="font-bold text-xl m-2 text-gray-800">Select Car</h2>
                        <div className="w-[600px] h-[250px] grid grid-cols-3 grid-rows-2">
                            {carData.map(cars => (
                                <div 
                                className={`p-2 border-3 hover:border border-green-800 hover:scale-90 transition-all cursor-pointer `}
                                onClick={handleActiveImage}>
                                    <img 
                                    key={cars.id} 
                                    src={cars.imagePath} 
                                    alt={cars.name} 
                                    className='w-[200px] h-[100px] object-cover'/>
                                </div>
                            ))}
                        </div>
                    </form>
            </div>
    
  )
}

export default Bookings