import React from 'react';

import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderBack: I['renderBack'] = function () {
    return (
        <div className="indexMap__backs">
            <div>
                <div className="indexMap__road_lights"></div>
                <div className="indexMap__road_lights"></div>
                <div className="indexMap__road_lights"></div>
                <div className="indexMap__road_lights"></div>
                <div className="indexMap__road_lights"></div>
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div className={`indexMap__navDecor _${num}`} key={num}>
                    <img
                        src={require(`@media/map-activity-${num}.png`)}
                        alt=""
                        className="indexMap__navDecorImage"
                    />
                </div>
            ))}
            {[1, 2, 3, 4].map((num) => (
                <div className="indexMap__back" key={num}>
                    <Media current="desktop">
                        <img
                            src={require(`@media/map-back-${num}.jpg`)}
                            alt=""
                            className="indexMap__backImage"
                        />
                    </Media>
                    <Media current="mobile">
                        <img
                            src={require(`@media/map-back-${num}-mob.jpg`)}
                            alt=""
                            className="indexMap__backImage"
                        />
                    </Media>
                </div>
            ))}
        </div>
    );
};

export default renderBack;
