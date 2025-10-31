import React from 'react';

import changePage from '@functions/changePage.ts';

import I from '../types.ts';

import getSavedRaffle from '../../../../rafflePrize/utils/getSavedRaffle.ts';

const renderCarusel: I['renderCarusel'] = function () {
    const { prize } = getSavedRaffle();

    if (prize) {
        return;
    }

    return (
        <div
            className="indexHeader__carusel _CLICK"
            onMouseEnter={this.advanceRotate.bind(this, true)}
            onMouseLeave={this.advanceRotate.bind(this, false)}
            onClick={() => {
                changePage({ pageName: 'raffle-prize' });
            }}
        >
            <div className="indexHeader__caruselBack">
                {[1, 2, 3, 4].map((k) => (
                    <div className={`indexHeader__caruselBackLight _${k}`} key={k}>
                        <img
                            src={require(`@media/reel/reel-${k}.png`)}
                            alt=""
                            className="indexHeader__caruselBackLightImage"
                        />
                    </div>
                ))}
                <img
                    src={require('@media/reel/reel.png')}
                    alt=""
                    className="indexHeader__caruselBackImage"
                />
            </div>

            <div className="indexHeader__caruselTop"></div>
        </div>
    );
};

export default renderCarusel;
