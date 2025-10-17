import React from 'react';

import Link from '@components/link/Link.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="page__head _COL _COL_H_CENTER">
            <h3 className="page__title">Победители розыгрышей</h3>
            <p className="page__description">
                Подробную информацию <br className="_MOBILE" />смотри в{' '}
                <Link className="page__descriptionLink" pageName="auth-login">
                    Личном кабинете
                </Link>
            </p>
        </div>
    );
};

export default renderHead;
