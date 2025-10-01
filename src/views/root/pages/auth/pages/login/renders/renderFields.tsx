import React from 'react';

import Field from '@components/field/Field.tsx';
import Link from '@components/link/Link.tsx';

import I from '../types.ts';

const renderFields: I['renderFields'] = function () {
    const { device } = this.props;

    return (
        <div className="popup__form _FULL_W">
            <div className="popup__formField _FULL_W">
                <Field
                    support={
                        device === 'desktop'
                            ? 'Адрес электронной почты (Ваш логин):'
                            : 'Email (Ваш логин):'
                    }
                    name="login"
                    value={this.getValue({ key: 'login' })?.value || ''}
                    onChange={async ({ value }) => {
                        await this.change({ login: value });
                    }}
                />
            </div>
            <div className="popup__formField _FULL_W _COL">
                <div className="popup__formFieldBox _FULL_W">
                    <Field
                        support="Пароль:"
                        name="password"
                        type="password"
                        value={this.getValue({ key: 'password' })?.value || ''}
                        onChange={async ({ value }) => {
                            await this.change({ password: value });
                        }}
                    />
                </div>
                <Link className="popup__formFieldLink _CLICK" pageName="auth-reg">
                    Забыли пароль?
                </Link>
            </div>
        </div>
    );
};

export default renderFields;
