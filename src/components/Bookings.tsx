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
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('location')} placeholder="Enter Your Location"/>
        <input {...register('city')} placeholder="Enter Your City"/>
        <select {...register('carType')}>
            <option value="Economy">Economy</option>
            <option value="Luxury">Luxury</option>
        </select>
        <button type="submit"></button>
    </form>
  )
}

export default Bookings