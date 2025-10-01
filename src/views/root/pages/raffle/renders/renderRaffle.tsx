import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderRaffle: I['renderRaffle'] = function () {
    const { loadingKey, inProcess, isComplete, prizes, resultPrize } = this.state;

    return (
        <div
            className={`popup__raffle _FULL_W _COL _COL_H_CENTER ${prizes ? '_ready' : ''} ${inProcess ? '_process' : ''} ${isComplete ? '_complete' : ''}`}
        >
            <div className="popup__raffleBack">
                <div className="popup__raffleBackInner _FULL">
                    <Icon name="raffle-back-star" />
                </div>
            </div>
            {new Array(13).fill({}).map((item, key) => (
                <div className={`popup__raffleDecor _${key + 1}`} key={key}>
                    <div className="popup__raffleDecorInner _FULL" />
                </div>
            ))}

            {(prizes || []).map((prize, key) => (
                <div className={`popup__rafflePrize _${key + 1}`} key={key}>
                    <img src={prize.thumb} alt="" className="popup__rafflePrizeImage _FULL" />
                </div>
            ))}
            {resultPrize ? (
                <div className="popup__rafflePrize _result">
                    <img src={resultPrize.image} alt="" className="popup__rafflePrizeImage _FULL" />
                    <p className="popup__rafflePrizeSupport">Твой приз:</p>
                    <div className="popup__rafflePrizeName">{resultPrize.name}</div>
                </div>
            ) : (
                <div className="popup__rafflePrize _result _COL _COL_CENTER">
                    <p className="popup__rafflePrizeEmpty">
                        К сожалению, <br />
                        ты&nbsp;не выиграл
                    </p>
                </div>
            )}
            <div className="popup__raffleButton">
                <Button
                    className="_purple"
                    onClick={this.send.bind(this)}
                    loading={loadingKey === 'send'}
                >
                    Нажми, чтобы выиграть приз
                </Button>
            </div>
        </div>
    );
};

export default renderRaffle;
