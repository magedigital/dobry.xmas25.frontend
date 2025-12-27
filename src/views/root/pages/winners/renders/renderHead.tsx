import React from 'react';

import Link from '@components/link/Link.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="page__head _COL _COL_H_CENTER">
            <h3 className="page__title">Победители розыгрышей</h3>
            <p className="page__description">
                Подробную информацию <br className="_MOBILE" />
                смотри в{' '}
                <Link className="page__descriptionLink" pageName="auth-login">
                    Личном кабинете
                </Link>
            </p>
            {/* <a
                className="page__headLink"
                href={`/upload/docs/cng_prizers.pdf?${new Date().getTime()}`}
                target="_blank"
                rel="noreferrer"
            >
                <span>Обменные призы</span>
            </a> */}
        </div>
    );
};

export default renderHead;
