import React from 'react';

import Link from '@components/link/Link.tsx';

import I from '../types.ts';

import games from '../../../../../../../static/games.ts';

const renderPrizes: I['renderPrizes'] = function () {
    return (
        <div className="profile__block _prizes _FULL_W _COL _COL_H_CENTER">
            <div className="profile__blockHead _COL _COL_H_CENTER">
                <h3 className="profile__blockTitle _PROFILE-TITLE">
                    Играй, набирай очки, попадай в&nbsp;ТОП-500 игроков недели и&nbsp;участвуй
                    в&nbsp;розыгрыше призов
                </h3>
            </div>
            <div className="profile__blockPrizes">
                {(['VIBE', 'SPOTLIGHTS', 'STAGE', 'MATCH'] as const).map((name, key) => {
                    const game = games[name];

                    return (
                        <Link
                            className="profile__blockPrize _COL _COL_H_CENTER"
                            key={key}
                            pageName="game-inner"
                            ids={{ 1: name }}
                        >
                            <div className="profile__blockPrizeHead">
                                {/* <img
                                    alt=""
                                    className="profile__blockPrizeImage"
                                /> */}
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
