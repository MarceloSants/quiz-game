import { useState } from "react"

interface TimerProps {
    totalDuration: number;
    handleTimeOver: () => void;
}

function Timer({totalDuration, handleTimeOver} : TimerProps) {
    const [time, setTime] = useState(0)

    const handleTime = () => {
        if(time >= totalDuration){
            return
        }
        setTimeout(() => {
            setTime(time + 1)
            checkTimeOver()
        }, 1000);
    }

    const checkTimeOver = () => {
        if(time >= totalDuration - 1){
            handleTimeOver()
        }
    }

    const convertTime = () => {
        let minutes: number
        let seconds: number

        const leftTime = totalDuration - time

        if(leftTime >= 60){
            minutes = Math.floor(leftTime/60)
            seconds = leftTime - (minutes * 60)
        }else{
            minutes = 0
            seconds = leftTime
        }

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }

    const convertedTime = convertTime()
    
    handleTime()

    return(
        <p>{convertedTime}</p>
    )
}

export { Timer }