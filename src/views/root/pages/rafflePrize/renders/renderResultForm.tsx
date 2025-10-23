import React from 'react';

import Button from '@components/button/Button.tsx';
import Input from '@components/input/Input.tsx';

import I from '../types.ts';

const renderResultForm: I['renderResultForm'] = function () {
    return (
        <div className="rafflePrize__resultForm _COL">
            <div className="rafflePrize__resultFormInfo">
                <h4 className="rafflePrize__resultFormInfoTitle">Чтобы получить приз:</h4>
                <p className="rafflePrize__resultFormInfoText">Зарегистрируйся в Акции сейчас</p>
                <p className="rafflePrize__resultFormInfoText">
                    Зарегистрируй код под крышкой (можно позже)
                </p>
            </div>
            <div className="rafflePrize__resultFormField">
                <Input
                    className="_rafflePrize"
                    support="Введи Email для регистрации"
                    value=""
                    name="email"
                    onChange={async () => undefined}
                />
            </div>
            <div className="rafflePrize__resultFormButton">
                <Button className="_purple" onClick={() => undefined}>
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    );
};

export default renderResultForm;
