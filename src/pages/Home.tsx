import { useEffect, useState } from "react"
import Loader from "../components/Loader" //custom loader



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
                <h1>Welcome to Ride Booking</h1>
            </div>
        )}
    </div>
  )
}

export default Home