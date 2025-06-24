import { useState, useEffect } from "react";

function useDate() {

    const liveDate = new Date()

    const [now, setNow] = useState(liveDate);

    useEffect(() => {

        const intervalId = setInterval(() => {

            setNow(new Date());

        }, 1000);

        return () => clearInterval(intervalId); // Quando il componente viene smontato non si genererà un memory leak

    }, []);

    return `${now}`;
}

export default useDate;
