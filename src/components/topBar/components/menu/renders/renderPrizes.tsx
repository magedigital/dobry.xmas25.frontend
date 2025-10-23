import React from 'react';

import Link from '@components/link/Link.tsx';

import I from '../types.ts';

import games, { GameT } from '../../../../../static/games.ts';

const renderPrizes: I['renderPrizes'] = function () {
    const { handler } = this.props;

    return (
        <div className="menu__prizes _FULL_W _COL">
            <div className="menu__prizesInner _FULL_W _COL">
                <div className="menu__prizesTitle">
                    Исследуй Лосьвилль и&nbsp;участвуй в&nbsp;розыгрыше специальных призов
                </div>
                <div className="menu__prizesItems _FULL_W _ROW">
                    {(Object.keys(games) as (keyof typeof games)[]).map((name, key) => {
                        const game = games[name] as GameT;

                        return (
                            <Link
                                className="menu__prizesItem"
                                key={key}
                                pageName={game.pageName || 'game-inner'}
                                ids={{ 1: name }}
                                callback={() => {
                                    handler(false);
                                }}
                            >
                                <div className="menu__prize _FULL_W _COL _COL_H_CENTER">
                                    <div className="menu__prizeHead _COL _COL_CENTER">
                                        <img
                                            src={require(`@media/menu/${game.menuThumb}`)}
                                            alt=""
                                            className="menu__prizeImage"
                                        />
                                    </div>
                                    <div className="menu__prizeContent">{game.title}</div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default renderPrizes;
