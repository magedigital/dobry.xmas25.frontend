import React from 'react';

import Button from '@components/button/Button.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderOffer: I['renderOffer'] = function () {
    const { data } = this.props;

    return (
        <div className="profile__5kaOffer _COL">
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
                    <Button
                        onClick={() => {
                            changePage({ pageName: 'cheque' });
                        }}
                        className="_red"
                    >
                        загрузить ЧЕК
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderOffer;
