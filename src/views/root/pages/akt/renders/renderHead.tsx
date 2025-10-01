import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { loadingKey } = this.state;

    return (
        <div className="page__head _COL _COL_H_CENTER">
            <h3 className="page__title">Запрос акта</h3>
            <p className="page__description">
                Вам необходимо скачать акт, подписать его,
                отсканировать и&nbsp;загрузить в форме ниже:
            </p>
            <div className="page__headButton">
                <Button
                    className="_pink"
                    onClick={this.downloadAct.bind(this)}
                    loading={loadingKey === 'download'}
                >
                    скачать акт
                </Button>
            </div>
        </div>
    );
};

export default renderHead;
