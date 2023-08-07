import React, { useEffect, useState } from 'react';


/**
 * This component keeps track of a `counter` according to a 1 sec interval
 */
export function Rendi() {
    const [counter, setCounter] = useState(0);
    const [effected, setEffected] = useState(1);

    useEffect(() => {
        setCounter(counter + 1);
    }, [effected])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("effected", effected);
            console.log("new effected", effected + 1);
            setEffected((currEffected) => currEffected + 1);
        }, 1000);

        return () => {
            // cleanup:
            clearInterval(interval);
        }

    }, [])
    console.log(">> render");
    console.log("counter is: ", counter)

    return <div>This component has been rendered too many times:
        <br />
        {counter} times, affected: {effected} times</div>
}