import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { isComplete } = this.state;

    return (
        <div className="page__head _COL _COL_H_CENTER">
            <h3 className="page__title">Карусель призов</h3>
            <p className="page__description">
                {isComplete ? 'Твой приз:' : 'Вращай и узнай свой приз'}
            </p>
        </div>
    );
};

export default renderHead;
