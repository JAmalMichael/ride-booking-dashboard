import { useState } from "react"
import UserProfile from "./User-profile"

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(prevState => !prevState)
    }

  return (
    <div className="px-6 flex justify-between items-center bg-slate-800 text-white w-full h-[100px] z-10" onClick={handleShow}>
        <div>
            <h1 className="font-bold text-3xl">BOOK<span className="text-green-500 ">DRIVE</span></h1>
        </div>
        <div>
            <ul className="flex justify-center items-center text-xl">
                <li className="mr-10">
                    <a href="/" className="hover:bg-gray-400 rounded transition-all">Home</a></li>
                <li> <a href="/" className="hover:bg-gray-400 rounded transition-all">History</a></li>
            </ul>
        </div>
        <div className="relative">
                <img src="/assets/user.jpg" className="rounded-full w-[60px] h-[60px] cursor-pointer object-cover border-1 hover:border-4 border-green-800 "/>
            <UserProfile hide = {show}/>
        </div>
    </div>
  )
}

export default Navbar