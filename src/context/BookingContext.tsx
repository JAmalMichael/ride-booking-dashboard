import React, { createContext, useContext, useState } from "react";

//declaring types for booking form
interface Booking {
    location: string;
    city: string;
    carType: string;
    price: number;
    paymentStatus: string;
}

interface BookingProviderProps {
    children:React.ReactNode
}

//declaring types for state value
interface BookingContextType {
    booking: Booking;
    setBooking: React.Dispatch<React.SetStateAction<Booking>>;
}

//default value for booking
const defaultBooking: Booking = {
    location: '',
    city: '',
    carType: '',
    price: 0,
    paymentStatus: ''
}


const BookingContext = createContext<BookingContextType | undefined>(undefined)

//providing global state for booking form
export const BookingProvider = ({ children }: BookingProviderProps) => {
    const [booking, setBooking] = useState<Booking>(defaultBooking);

    return (
        <BookingContext.Provider value={{booking, setBooking}}>
            {children}
        </BookingContext.Provider>
    )
}

//error handling Booking incase undefined or missing
export const useBooking = () => {
    const context = useContext(BookingContext);
    if(!context) throw new Error('useBooking must be used within BookingProvider')
        return context;
}
