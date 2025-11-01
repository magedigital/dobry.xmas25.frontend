import React from 'react';

import Button from '@components/button/Button.tsx';
import Checkbox from '@components/checkbox/Checkbox.tsx';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const renderStartForm: I['renderStartForm'] = function () {
    const { isConfirm, loadingKey } = this.state;

    return (
        <div className="rafflePrize__startForm _COL">
            <div className="rafflePrize__startFormCheckbox">
                <Checkbox
                    className="_white"
                    value={!!isConfirm}
                    onChange={async ({ value }) => {
                        await setAsyncState.call(this, { isConfirm: value });
                    }}
                >
                    Я соглашаюсь с{' '}
                    <a href="/docs/rules.pdf" target="_blank">
                        Правилами акции
                    </a>{' '}
                    и&nbsp;
                    <a href="/docs/politics.pdf" target="_blank">
                        Политикой конфиденциальности
                    </a>
                </Checkbox>
            </div>
            <div className="rafflePrize__startFormButton">
                <Button
                    onClick={this.start.bind(this)}
                    className="_white"
                    loading={loadingKey === 'start'}
                >
                    ВРащать
                </Button>
            </div>
        </div>
    );
};

export default renderStartForm;
