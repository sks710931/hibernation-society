import React, { useState, useEffect } from 'react';
import { Banner } from '../components/banner';
import { Timer } from '../components/timer';

export const Home = () => {
    
    return (
        <div>
            <Banner/>
            <Timer  />
        </div>
    );
}

