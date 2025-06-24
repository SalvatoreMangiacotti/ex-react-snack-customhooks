import { useState, useEffect } from "react";

function useDate() {

    const liveDate = new Date()

    const [now, setNow] = useState(liveDate);

    useEffect(() => {

        const intervalId = setInterval(() => {

            setNow(new Date());

        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    return `${now}`;
}

export default useDate;
