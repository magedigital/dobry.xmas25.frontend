import React from 'react';

import Prize from '../components/prize/Prize.tsx';

import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function () {
    const { data, user } = this.props;
    const prizes = data?.prizes || [];

    return (
        <div className="profile__blockMainPrizes _FULL_W">
            {prizes.map((prize, key) => (
                <div className="profile__blockMainPrize" key={key} style={{ zIndex: key + 1 }}>
                    <Prize user={user} prize={prize} />
                </div>
            ))}
        </div>
    );
};

export default renderPrizes;
