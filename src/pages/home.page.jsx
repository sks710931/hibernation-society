import React, { useState } from 'react';
import { Banner } from '../components/banner';
import { Images } from '../components/images';
import { Minter } from '../components/minter';
import { Perks } from '../components/perks';
import { Team } from '../components/team';
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
            <Perks />
            <Images />
        <Team />
        </div>
    );
}

