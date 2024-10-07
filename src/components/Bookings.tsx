import React from "react"
import { useForm } from "react-hook-form";
import { useBooking } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

interface FormData {
    location: string,
    city: string,
    carType: string
}

const Bookings:React.FC = () => {
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



  return (
            <div className="p-10">
                <h1 className="font-bold text-3xl m-2 text-gray-800">Booking</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex col border border-green-500 w-[700px] h-[700px] rounded p-5 gap-5">
                        <input {...register('location')} placeholder="Enter Your Location" className="border rounded-md h-10 outline-none"/>
                        <input {...register('city')} placeholder="Enter Your City" className="border rounded-md h-10 outline-none"/>
                        <select {...register('carType')} className="border rounded-md h-10 outline-none">
                            <option value="Economy">Economy</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                        <button type="submit"></button>
                    </form>
            </div>
    
  )
}

export default Bookings