import { getCurrentDate } from "../utils/currentDate"

const Current = ({ data }) => {
    const weatherIcon = data.current ? data.current.condition.icon : null;
    const currentDate = getCurrentDate();
    return (
        <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
            <div className="flex items-center">
                <div className="">
                    <h1 className="text-3xl text-white">Today</h1>
                    <p className="text-white">{currentDate}</p>
                </div>
                {weatherIcon && (
                    <div>
                        <img className="w-[50px] object-cover" src={weatherIcon} alt="Weather Icon" />
                    </div>
                )}
            </div>
            {data.current ? (
                <p className="text-5xl text-white">
                    {data.current.temp_f.toFixed()}
                    <span>°</span>
                </p>
            ) : null}
        </div>
    )
}

export default Current