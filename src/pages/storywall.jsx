import React from 'react';
import { StoryWallBanner } from '../components/storywall/banner';
import { StoryWallContent } from '../components/storywall/content';

export const StoryWall = () => {
    return (
        <div>
            <StoryWallBanner />
            <StoryWallContent />
        </div>
    );
}
