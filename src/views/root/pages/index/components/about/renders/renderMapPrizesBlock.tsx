import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';
import Link from '@components/link/Link.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

import games from '../../../../../../../static/games.ts';

const renderMapPrizesBlock: I['renderMapPrizesBlock'] = function () {
    return (
        <>
            <div className="indexAbout__mapPrizes _FULL_W _COL _COL_H_CENTER">
                <div className="indexAbout__mapPrizesContent _FULL_W _COL _COL_H_CENTER">
                    <Lazy name="2">
                        {new Array(3).fill({}).map((item, key) => (
                            <div
                                className={`indexAbout__mapPrizesContentDecor _${key + 1}`}
                                key={key}
                            />
                        ))}
                    </Lazy>
                    <h4 className="indexAbout__mapPrizesContentTitle">
                        Заходи в игровые шатры Добрый®!
                    </h4>
                    <p className="indexAbout__mapPrizesContentDescription">
                        Набирай очки, попадай в&nbsp;ТОП-500 игроков недели и&nbsp;участвуй
                        в&nbsp;розыгрыше призов - сертификатов на&nbsp;развлечения
                    </p>
                    <div className="indexAbout__mapPrizesContentCard">
                        <Lazy name="2">
                            {new Array(4).fill({}).map((item, key) => (
                                <div
                                    className={`indexAbout__mapPrizesContentCardDecor _${key + 1}`}
                                    key={key}
                                >
                                    <div className="indexAbout__mapPrizesContentCardDecorInner _FULL" />
                                </div>
                            ))}
                        </Lazy>

                        <div className="indexAbout__mapPrizesContentCardInner _FULL"></div>
                    </div>
                </div>
                <div className="indexAbout__mapPrizesCards _ROW">
                    {(['VIBE', 'SPOTLIGHTS', 'STAGE', 'MATCH'] as const).map((name, key) => {
                        const game = games[name];

                        return (
                            <Link
                                className="indexAbout__mapPrizesCard _COL _COL_H_CENTER"
                                key={key}
                                pageName="game-inner"
                                ids={{ 1: name }}
                                callback={() => {
                                    sendGoal(game.goal);
                                }}
                            >
                                <div className="indexAbout__mapPrizesCardHead">
                                    {/* <img
                                        alt=""
                                        className="indexAbout__mapPrizesCardImage _FULL"
                                    /> */}
                                </div>
                                <div className="indexAbout__mapPrizesCardAlert">
                                    {game.description}
                                </div>
                                <div className="indexAbout__mapPrizesCardContent">{game.title}</div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default renderMapPrizesBlock;
