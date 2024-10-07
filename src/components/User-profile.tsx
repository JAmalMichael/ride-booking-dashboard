// import React from "react";
import { GrUserSettings } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";


interface UserProp {
    hide: boolean    
}

const UserProfile = ({hide}: UserProp) => {
    if(hide) {
        return null
    } else {
        return (
            <div className="bg-slate-100 w-96 h-44 absolute top-16 right-5 rounded-lg shadow-inner flex col p-5 z-50" >
                <div className="row p-2 items-center">
                <img src="/assets/user.jpg" 
                    className="rounded-full w-[40px] h-[40px] cursor-pointer object-cover mr-3 items-center"/>
                    <div className="col font-bold">
                    <h2 className="text-lg text-slate-800">Simon Anieke</h2>
                    <p className="text-sm text-slate-500">simonanieke303@gmail.com</p>
                    </div>
                    
                </div>
                <div className="row p-2 items-center ml-2">
                    <span className="text-slate-500 mr-7"><GrUserSettings /></span>
                    <h2 className="text-slate-500 font-semibold">Manage your account</h2>
                </div>
                <div className="row p-2 items-center ml-2">
                    <span className="text-slate-500 mr-7"><FaSignOutAlt /></span>
                    <h2 className="text-slate-500 font-semibold">Sign Out</h2>
                </div>
            </div>
          )
    }
 
}

export default UserProfile