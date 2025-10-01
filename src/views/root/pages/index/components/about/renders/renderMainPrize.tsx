import React from 'react';

import MainPrizeBanner from '@components/mainPrizeBanner/MainPrizeBanner.tsx';

import I from '../types.ts';

const renderMainPrize: I['renderMainPrize'] = function () {
    return (
        <div className="indexAbout__mainPrize _COL">
            <MainPrizeBanner
                title="Главный приз"
                text="Поездка на МУЗЫКАЛЬНЫЙ фестиваль с друзьями <br/>на 3 человека"
            />
        </div>
    );
};

export default renderMainPrize;
