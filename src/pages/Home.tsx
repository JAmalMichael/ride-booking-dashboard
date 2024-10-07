import { useEffect, useState } from "react"
import Loader from "../components/Loader" //custom loader
import Navbar from "../components/Navbar";
import Bookings from "../components/Bookings";
import Map from "../components/Map";



const Home = () => {
    const [loading, setLoading] = useState(true);

    //simulating api calling
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setLoading(false);
        }
        fetchData();
    }, [])


  return (
    <div>
        {loading ? ( <Loader />)  //show loader
        :
        (
            <div className="home">
                <Navbar />
                <div className="row justify-between">
                    <Bookings />
                    <Map />
                </div>
            </div>
        )}
    </div>
  )
}

export default Home