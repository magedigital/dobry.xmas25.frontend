import React from 'react';

import Button from '@components/button/Button.tsx';
import Lazy from '@components/lazy/Lazy.tsx';
import changePage from '@functions/changePage.ts';
import sendGoal from '@functions/sendGoal.ts';

import Prizes from '../components/prizes/Prizes.tsx';

import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function ({ name }) {
    const { content } = this.props;
    const thisContent = content ? content.components.prizes[name] : undefined;

    return (
        <div className="index5kaPrizes__prizes _COL _COL_H_CENTER">
            <Lazy name="3">
                {new Array(name === 'weekly' ? 3 : 6).fill({}).map((item, key) => (
                    <div className={`index5kaPrizes__prizesDecor _${name} _${key + 1}`} key={key} />
                ))}
            </Lazy>

            <h4 className="index5kaPrizes__prizesTitle">{thisContent?.info.title.title}</h4>
            <div className="index5kaPrizes__prizesContent _FULL_W _COL _COL_H_CENTER">
                <Lazy name="3">
                    {new Array(name === 'weekly' ? 5 : 6).fill({}).map((item, key) => (
                        <div
                            className={`index5kaPrizes__prizesContentDecor _${name} _${key + 1}`}
                            key={key}
                        />
                    ))}
                </Lazy>

                {thisContent && <Prizes items={thisContent!.items} />}
                {name === 'vip' && (
                    <div className="index5kaPrizes__prizesButton">
                        <Button
                            className="_purple"
                            onClick={() => {
                                changePage({ pageName: 'game-inner', ids: { 1: 'FIVE' } });

                                sendGoal('vipBtn,5kaVipBtn');
                            }}
                        >
                            Играть
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default renderPrizes;
