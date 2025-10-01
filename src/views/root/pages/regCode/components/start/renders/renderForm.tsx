import React from 'react';

import Field from '@components/field/Field.tsx';

import I from '../types.ts';

const renderForm: I['renderForm'] = function () {
    return (
        <div className="popup__height _COL _COL_V_CENTER">
            <div className="popup__form _FULL_W">
                <div className="popup__formField _FULL_W _center">
                    <Field
                        support="Введи код под крышкой"
                        name="code"
                        value={this.getValue({ key: 'code' })?.value || ''}
                        onChange={async ({ value }) => {
                            await this.change({ code: value });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default renderForm;
