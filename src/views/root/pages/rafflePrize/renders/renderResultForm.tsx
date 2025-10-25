import React from 'react';

import Button from '@components/button/Button.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderResultForm: I['renderResultForm'] = function () {
    const { loadingKey } = this.state;
    const { user } = this.props;

    return (
        <div className="rafflePrize__resultForm _COL">
            {user ? (
                <>
                    <div className="rafflePrize__resultFormInfo">
                        <h4 className="rafflePrize__resultFormInfoTitle">Чтобы получить приз:</h4>
                        <p className="rafflePrize__resultFormInfoText _center">
                            Зарегистрируй код под крышкой (можно позже)
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="rafflePrize__resultFormInfo">
                        <h4 className="rafflePrize__resultFormInfoTitle">Чтобы получить приз:</h4>
                        <p className="rafflePrize__resultFormInfoText _list">
                            Зарегистрируйся в Акции сейчас
                        </p>
                        <p className="rafflePrize__resultFormInfoText _list">
                            Зарегистрируй код под крышкой (можно позже)
                        </p>
                    </div>
                    {/* <div className="rafflePrize__resultFormField">
                        <Input
                            className="_rafflePrize"
                            support="Введи Email для регистрации"
                            value={login || ''}
                            name="email"
                            onChange={async ({ value }) => {
                                await setAsyncState.call(this, { login: value });
                            }}
                        />
                    </div> */}
                    <div className="rafflePrize__resultFormButton">
                        <Button
                            className="_purple"
                            onClick={() => {
                                changePage({ pageName: 'auth-reg', query: { raffle: 'true' } });
                            }}
                            loading={loadingKey === 'reg'}
                        >
                            Зарегистрироваться
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default renderResultForm;
