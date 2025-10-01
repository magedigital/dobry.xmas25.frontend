import React from 'react';

import Button from '@components/button/Button.tsx';
import Fade from '@components/fade/Fade.tsx';

import I from '../types.ts';

const renderSuccess: I['renderSuccess'] = function () {
    const { isSuccess } = this.state;

    return (
        <Fade className="popup__success _FULL _COL _COL_CENTER" isShow={!!isSuccess}>
            <div className="popup__successInner _FULL _COL _COL_CENTER">
                <div className="popup__successHead _COL _COL_CENTER">
                    <p className="popup__successTitle">Спасибо за участие!</p>
                    <p className="popup__successText">
                        Твоя визитка успешно отправлена и будет рассмотрена в ближайшее время.
                        В&nbsp;случае выигрыша мы свяжемся с тобой по указанному email.
                    </p>
                </div>

                <div className="popup__successButton">
                    <Button className="_banner2" onClick={this.close.bind(this)}>
                        ЗАкрыть окно
                    </Button>
                </div>
            </div>
        </Fade>
    );
};

export default renderSuccess;
