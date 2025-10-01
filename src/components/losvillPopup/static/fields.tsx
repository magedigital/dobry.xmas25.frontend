import React from 'react';

export const losvillPopupFields = {
    elkName1: {
        support: 'Житель 1',
        type: 'input',
    },
    elkName2: {
        support: 'Житель 2',
        type: 'input',
    },
    elkName3: {
        support: 'Житель 3',
        type: 'input',
    },
    email: {
        support: 'Твой e-mail:',
        type: 'input',
    },
    politics: {
        support: () => (
            <>
                Я соглашаюсь с{' '}
                <a href="/upload/docs/politics.pdf" target="_blank">
                    политикой конфиденциальности
                </a>{' '}
                и{' '}
                <a href="/upload/docs/contest.pdf" target="_blank">
                    условиями обработки персональных данных
                </a>
            </>
        ),
        type: 'checkbox',
    },
    rules: {
        support: () => (
            <>
                Я соглашаюсь с{' '}
                <a href="/upload/docs/rules.pdf" target="_blank">
                    Правилами конкурса
                </a>
            </>
        ),
        type: 'checkbox',
    },
};

type FieldT = {
    type: 'input' | 'checkbox';
    support: string | (() => React.ReactNode);
};
export type { FieldT };
