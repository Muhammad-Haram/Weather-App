"use client"
import { IoSearch } from "react-icons/io5";
interface InputProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
    return (
        <form className="flex items-center md:w-2/4 w-full order-2 md:order-1"
        >
            <input type="text" className="w-full rounded-sm p-1 outline-none text-black" placeholder="Press (Enter) to get Result"
                onKeyDown={handleSearch}
                onChange={(e) => { setLocation(e.target.value) }}
            />

            <div className="ml-[-25px] text-black cursor-pointer">
                <IoSearch />
            </div>

        </form >
    )
}

export default Input