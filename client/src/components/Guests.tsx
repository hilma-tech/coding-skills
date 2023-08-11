import axios from 'axios';
import { FC, useEffect, useState } from 'react'


export const GS: FC = () => {
    const [guestsCount, setGuestsCount] = useState<number | null>(null);
    const [canDivideIntoPairs, setCanDivideIntoPairs] = useState(false);

    useEffect(() => {
        setCanDivideIntoPairs(guestsCount !== null && guestsCount % 2 === 0);
    }, [guestsCount]);

    const handleNewGuest = () => {
        axios.post("/api/new-guest")
        const partyInfo = axios.get("/api/party-info")
        setGuestsCount(curr => !curr ? 1 : curr + 1);
    }

    const DIVIDE_INTO_PAIRS_DISPLAY_SETTINGS: { text: string, className: string }[] = [
        { text: "We can divide into pairs!!!", className: "color-green" },
        { text: "We can't divide into pairs...", className: "color-red" },
    ];

    const divideIntoPairsDisplay = DIVIDE_INTO_PAIRS_DISPLAY_SETTINGS[canDivideIntoPairs ? 0 : 1];

    return (
        <div>
            <p>{!guestsCount || guestsCount <= 0 ? "No one is here yet..." : guestsCount === 1 ? `We have 1 guest!` : "We have " + guestsCount + " guests!"}</p>
            <p className={divideIntoPairsDisplay.className}>{divideIntoPairsDisplay.text}</p>
            <button onClick={handleNewGuest}>knock knock</button>
        </div>
    );
};
