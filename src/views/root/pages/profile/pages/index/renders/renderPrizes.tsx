import React from 'react';

import Link from '@components/link/Link.tsx';

import I from '../types.ts';

import games, { GameT } from '../../../../../../../static/games.ts';

const renderPrizes: I['renderPrizes'] = function () {
    return (
        <div className="profile__block _prizes _FULL_W _COL _COL_H_CENTER">
            <div className="profile__blockHead _COL _COL_H_CENTER">
                <h3 className="profile__blockTitle _PROFILE-TITLE">Играй в Лосьвилле</h3>
            </div>
            <div className="profile__blockPrizes">
                {(Object.keys(games) as (keyof typeof games)[]).map((name, key) => {
                    const game = games[name] as GameT;

                    return (
                        <Link
                            className="profile__blockPrize _COL _COL_H_CENTER"
                            key={key}
                            pageName={game.pageName || 'game-inner'}
                            ids={{ 1: name.toString() }}
                        >
                            <div className="profile__blockPrizeHead">
                                <img
                                    src={require(`@media/menu/${game.menuThumb}`)}
                                    className="profile__blockPrizeImage"
                                />
                            </div>
                            <div className="profile__blockPrizeContent">{game.title}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default renderPrizes;
