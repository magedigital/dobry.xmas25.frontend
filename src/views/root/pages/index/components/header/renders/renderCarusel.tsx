import React from 'react';

import changePage from '@functions/changePage.ts';

import I from '../types.ts';

import getSavedRaffle from '../../../../rafflePrize/utils/getSavedRaffle.ts';

const renderCarusel: I['renderCarusel'] = function () {
    const { user } = this.props;
    const { prize } = getSavedRaffle();

    if (user || prize) {
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
                <img
                    src={require('@media/karusel-1.png')}
                    alt=""
                    className="indexHeader__caruselBackImage"
                />
            </div>

            <div className="indexHeader__caruselTop"></div>
        </div>
    );
};

export default renderCarusel;
