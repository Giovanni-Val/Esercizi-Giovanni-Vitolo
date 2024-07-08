import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
            console.log("Updating...")
        }, 1000)
    }, [])

    return (
        <div>
            <p>Current time: </p><h2>{date.toLocaleTimeString()}</h2>
        </div>
    )

}