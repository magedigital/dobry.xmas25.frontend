import React from 'react';

import changePage from '@functions/changePage.ts';
import sendGoal from '@functions/sendGoal.ts';

import Raffle from '../components/raffle/Raffle.tsx';

import I from '../types.ts';

const renderRaffles: I['renderRaffles'] = function () {
    const { content } = this.props;

    return (
        <div className="profile__block _ruffles _COL _COL_H_CENTER">
            <div className="profile__blockHead _COL _COL_H_CENTER">
                <h3 className="profile__blockTitle _PROFILE-TITLE">ПОТРАТЬ БАЛЛЫ</h3>
            </div>
            <div className="profile__blockRaffles _FULL_W">
                {content && (
                    <>
                        <div className="profile__blockRaffle">
                            <Raffle
                                title={content.components.buy.raffle.info.header.title}
                                description={content.components.buy.raffle.info.header.description}
                                buttonText={content.components.buy.raffle.info.button.title}
                                buttonOnClick={() => {
                                    changePage({ pageName: 'game-inner', ids: { 1: 'LOSYANTA' } });
                                }}
                                items={content.components.buy.raffle.prizes.map((item) => ({
                                    title: item.title,
                                    image: item.thumb,
                                }))}
                                sliderCallback={(currentRuffleIndex) => {
                                    this.setState({ currentRuffleIndex });
                                }}
                            />
                        </div>
                        <div className="profile__blockRaffle">
                            <Raffle
                                title={content.components.buy.merch.info.header.title}
                                description={content.components.buy.merch.info.header.description}
                                buttonText={content.components.buy.merch.info.button.title}
                                buttonOnClick={() => {
                                    changePage({
                                        pageName: 'merch',
                                        pageData: {
                                            currentMerchIndex: this.state.currentMerchIndex,
                                        },
                                    });

                                    sendGoal('profileOrderPrizeBtn');
                                }}
                                items={content.components.buy.merch.prizes.map((item) => ({
                                    title: item.title,
                                    image: item.thumb,
                                }))}
                                sliderCallback={(currentMerchIndex) => {
                                    this.setState({ currentMerchIndex });
                                }}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default renderRaffles;
