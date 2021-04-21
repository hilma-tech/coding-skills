import React, { useEffect, useState } from 'react';

export function Rendi() {
    const [counter, setCounter] = useState(0)
    const [effected, setEffected] = useState(1);
    useEffect(() => {
        setCounter(counter + 1);
    }, [effected])

    useEffect(() => {
        setInterval(() => {
            console.log("interval", effected)
            console.log("new interval", effected + 1)
            setEffected(effected + 1)
        }, 1000);
    }, [])
    console.log(">> render");
    console.log("counter: ", counter)

    return <div>This component has been rendered too many times: {counter} times, affected: {effected} times</div>
}