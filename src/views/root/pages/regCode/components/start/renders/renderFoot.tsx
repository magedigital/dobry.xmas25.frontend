import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey, error } = this.state;
    const { setRenderKey } = this.props;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <Error className="popup__error" error={error} callback={setRenderKey} />
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                <div className="popup__button _fix">
                    <Button
                        className="_purple"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
