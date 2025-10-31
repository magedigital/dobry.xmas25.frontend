import React from 'react';

import I from '../types';

export const manPopupFields = {
    email: {
        support: 'Твой e-mail:',
        type: 'input',
    },
    video: {
        support: '',
        type: 'upload',
    },
    politics: {
        support: () => (
            <>
                Я соглашаюсь с{' '}
                <a href="/upload/docs/politics.pdf" target="_blank">
                    политикой конфиденциальности
                </a>{' '}
                и{' '}
                <a href="/upload/docs/requirements.pdf" target="_blank">
                    условиями обработки персональных данных
                </a>
            </>
        ),
        type: 'checkbox',
    },
    rules: {
        support(this: I) {
            const { isShowAlert } = this.state;

            return (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/contest.pdf" target="_blank">
                        Правилами конкурса
                    </a>{' '}
                    и Требованиями <br className="_DESKTOP" />к участникам
                    <i className={`v2popup__bannerFieldIcon ${isShowAlert ? '_hover' : ''}`}>
                        <div
                            className="v2popup__bannerFieldIconBtn"
                            onClick={(e) => {
                                e.stopPropagation();

                                this.setState({ isShowAlert: true });
                            }}
                        >
                            i
                        </div>
                        <div className="v2popup__bannerFieldAlert">
                            <p className="v2popup__bannerFieldAlertTitle">
                                Ты готов к пряткам, если все эти пункты про тебя:
                            </p>
                            <ol className="v2popup__bannerFieldAlertList">
                                <li className="v2popup__bannerFieldAlertListItem">
                                    Тебе больше 18 лет;
                                </li>
                                <li className="v2popup__bannerFieldAlertListItem">
                                    У тебя хорошая спортивная подготовка и&nbsp;нет медицинских
                                    ограничений для участия в&nbsp;активных играх;
                                </li>
                                <li className="v2popup__bannerFieldAlertListItem">
                                    Живешь на территории России.
                                </li>
                            </ol>
                        </div>
                    </i>
                </>
            );
        },
        type: 'checkbox',
    },
};

type FieldT = {
    type: 'input' | 'checkbox' | 'upload';
    support: string | ((this: I) => React.ReactNode);
};
export type { FieldT };
