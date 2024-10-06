
const Navbar = () => {
  return (
    <div className="px-6 flex justify-between items-center bg-slate-800 text-white w-full h-[100px]">
        <div>
            <h1 className="font-bold text-3xl">BOOK<span className="text-green-500 ">DRIVE</span></h1>
        </div>
        <div>
            <ul className="flex justify-center items-center text-xl">
                <li className="mr-10">
                    <a href="/">Home</a></li>
                <li> <a href="/">History</a></li>
            </ul>
        </div>
        <div>
            <h2>profile</h2>
        </div>
    </div>
  )
}

export default Navbar