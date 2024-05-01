const WeekForcast = ({ data }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
            {data.forecast.forecastday.map((day, index) => (
                <div
                    key={index}
                    className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center font-semibold gap-4"
                    role="group"
                    aria-label={`Forecast for ${new Date(day.date).toLocaleString("en-US", { weekday: "short" })}`}
                >
                    <p className="italic text-2xl">{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
                    <img
                        className="w-50 h-50"
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                        aria-label={day.day.condition.text}
                    />
                    <div>
                    </div>
                </div>
            )
}

            export default WeekForcast