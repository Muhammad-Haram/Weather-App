"use client"
import { IoSearch } from "react-icons/io5";

const Input = () => {
    return (
        <form className="flex items-center md:w-2/4 w-full order-2 md:order-1"
        >
            < input type="text" className="w-full rounded-sm p-1 outline-none text-black" placeholder="Search..." />

            <div className="ml-[-25px] text-black cursor-pointer">
                <IoSearch />
            </div>

        </form >
    )
}

export default Input