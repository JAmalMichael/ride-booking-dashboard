import React, { createContext, useContext, useState } from "react";

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

interface BookingContextType {
    booking: Booking;
    setBooking: React.Dispatch<React.SetStateAction<Booking>>;
}

const defaultBooking: Booking = {
    location: '',
    city: '',
    carType: '',
    price: 0,
    paymentStatus: ''
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)


export const BookingProvider = ({ children }: BookingProviderProps) => {
    const [booking, setBooking] = useState<Booking>(defaultBooking);

    return (
        <BookingContext.Provider value={{booking, setBooking}}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBooking = () => {
    const context = useContext(BookingContext);
    if(!context) throw new Error('useBooking must be used within BookingProvider')
        return context;
}
