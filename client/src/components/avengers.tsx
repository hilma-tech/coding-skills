import React, { useEffect, useState } from 'react';
import { AvengersInfo } from '../common/consts/avangers.const';

interface AvengersProps {
    avengersArray: Array<string>,
    limit: number
}

export const Avengers: React.FC<AvengersProps>  = ({ }) => {
    // const [hadSnap, setHadSnap] = useState<boolean>(false);
    const [message, setMessage] = useState("");
    const [avengersArray, setAvengersArray] = useState<Array<{ name: string, picked: boolean }>>([]);

    useEffect(() => {
        console.log(avengersArray);
    }, [avengersArray]);


    const onClick = (index: number) => {
        const currentAvengerIsChecked = (avengersArray?.find(x => x.name === AvengersInfo[index].name)) || null
        if (typeof currentAvengerIsChecked !== 'object') {
            setAvengersArray(prev => {
                return [...prev, { name: AvengersInfo[index].name, picked: true }]
            })
        } else if (currentAvengerIsChecked?.picked) {
            setAvengersArray(prev => {
                const i = prev.findIndex(av => av.name === AvengersInfo[index].name)
                const newArr = prev.splice(i, 1)
                return newArr
            })
        }
    }

    const afterTheSnap = () => {
        // if (hadSnap) {
        if (avengersArray && avengersArray.length > 0) {
            const died1: Array<{ name: string, died: boolean }> = AvengersInfo.filter(c => c.died)
            const died2: Array<{ name: string, picked: boolean }> = avengersArray.filter(c => c?.picked)

            if (died1.length === died2.length) {
                let found = true
                died2.forEach(c1 => {
                    let flag = false
                    died1.forEach(c2 => {
                        if (c1.name === c2.name) flag = true
                    })
                    found = found && flag
                })
                if (found) {
                    setMessage('very good, you got all of them!')
                } else {
                    setMessage('wrong, try again!')
                }

            } else {
                setMessage('wrong, try again!')
            }

        }
        // }

    }


    return (
        <div style={{ width: '40vw', margin: 'auto' }}>
            <h1>The Avengers</h1>
            <h2>Pick the charechters that dies at the snap!</h2>
            <button onClick={afterTheSnap}>Check your answers!</button>
            <div className="message">{message}</div>
            <div className="list" style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>

                {AvengersInfo.map((av, index) =>
                    <div style={{ display: 'flex', direction: 'ltr' }}>
                        <input type="checkbox" checked={avengersArray.find(x => x.name === av.name)?.picked} onChange={() => onClick(index)} />
                        <label>{av.name}</label>
                    </div>
                )}

            </div>
        </div>
    );
};
