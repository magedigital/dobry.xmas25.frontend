import React from 'react';

import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderBack: I['renderBack'] = function () {
    return (
        <div className="indexMap__backs">
            {[1, 2, 3, 4, 5].map((num) => (
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
