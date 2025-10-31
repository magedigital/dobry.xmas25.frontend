import React from 'react';

import Button from '@components/button/Button.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderOffer: I['renderOffer'] = function () {
    const { data } = this.props;
    const findPrize = data?.prizes.find((p) => p.code === 'ALPHA_ELK');
    let status = 'process';

    if (data && data.checks.filter((c) => c.statusCode === 'ACCEPTED').length >= 10) {
        status = findPrize ? 'completed' : 'waitPrize';
    }

    return (
        <div className={`profile__5kaOffer _COL _${status}`}>
            <h3 className="profile__5kaOfferTitle _PROFILE-TITLE">Акция в «Пятёрочке»</h3>
            <div className="profile__5kaOfferContent">
                <p className="profile__5kaOfferText">
                    Загрузи 10 чеков из «Пятёрочки» с&nbsp;продукцией Добрый® и обменяй
                    на&nbsp;игрушку Альфа-лось
                </p>
                <div className="profile__5kaOfferStats">
                    загружено
                    <br />
                    чеков:
                    <span>{data?.checks?.length || 0}</span>
                </div>
                <div className="profile__5kaOfferButton">
                    {status === 'process' && (
                        <Button
                            onClick={() => {
                                changePage({ pageName: 'cheque' });
                            }}
                            className="_red"
                        >
                            загрузить ЧЕК
                        </Button>
                    )}
                    {status === 'waitPrize' && (
                        <Button
                            onClick={() => {
                                changePage({ pageName: 'alpha-prize' });
                            }}
                            className="_topBar5kaProfile"
                        >
                            Заказать приз
                        </Button>
                    )}
                    {status === 'completed' && (
                        <Button onClick={() => undefined} className="_disabled">
                            приз заказан
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default renderOffer;
