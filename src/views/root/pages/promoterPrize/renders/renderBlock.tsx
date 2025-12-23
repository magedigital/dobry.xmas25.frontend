import React from 'react';

import Button from '@components/button/Button.tsx';
import setAsyncState from '@functions/setAsyncState.ts';

import ChequeScan from '../../cheque/components/scan/Scan.tsx';
import Order from '../components/order/Order.tsx';

import I from '../types.ts';

const renderBlock: I['renderBlock'] = function ({ id }) {
    if (id === 'start') {
        return (
            <ChequeScan
                setStep={async () => undefined}
                uploadQr={async () => undefined}
                complete={async (userId) => {
                    await setAsyncState.call(this, { currentStep: 'form' as const, userId });
                }}
            />
        );
    }

    if (id === 'form') {
        return (
            <Order
                code={this.state.userId!}
                success={async () => {
                    await setAsyncState.call(this, { currentStep: 'success' as const });
                }}
            />
        );
    }

    if (id === 'success') {
        return (
            <>
                <div className="popup__success _FULL_W _COL _COL_CENTER _bottom">
                    <p className="popup__successTitle">Приз начислен!</p>
                </div>
                <div className="popup__buttons _ROW">
                    <div className="popup__button _fix">
                        <Button
                            onClick={() => {
                                this.setState({ currentStep: 'start', userId: undefined });
                            }}
                            className="_white"
                        >
                            Выдать ещё
                        </Button>
                    </div>
                </div>
            </>
        );
    }
};

export default renderBlock;
