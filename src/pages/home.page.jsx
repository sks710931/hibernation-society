import React, { useState } from 'react';
import { Banner } from '../components/banner';
import { Minter } from '../components/minter';
import { Timer } from '../components/timer';
import { Welcome } from '../components/welcome';

export const Home = () => {
    const [timerComplete, setTimerComplete] = useState(false);
    const onTimerComplete = (isCompleted) => {
        setTimerComplete(isCompleted)
    }
    return (
        <div>
            <Banner/>
            {
                !timerComplete ? (<Timer onComplete={onTimerComplete}  />) : (<Minter />)
            }
            <Welcome />
        </div>
    );
}

