import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import Field from '@components/field/Field.tsx';

import I from '../types.ts';

import { FieldT, losvillPopupFields } from '../static/fields.tsx';

const renderFields: I['renderFields'] = function () {
    return (
        <div className="popup__bannerFields _FULL_W">
            {(Object.keys(losvillPopupFields) as (keyof typeof losvillPopupFields)[]).map(
                (name) => {
                    const field = losvillPopupFields[name] as FieldT;
                    const support =
                        typeof field.support === 'function' ? field.support() : field.support;

                    return (
                        <div
                            className={`popup__bannerField _${name} _type-${field.type}`}
                            key={name}
                        >
                            {field.type === 'input' && (
                                <Field
                                    name={name}
                                    support={support as string}
                                    value={this.getValue({ key: name })?.value as string}
                                    onChange={async ({ value }) => {
                                        await this.change({ [name]: value }, 'form');
                                    }}
                                />
                            )}
                            {field.type === 'checkbox' && (
                                <Checkbox
                                    value={!!this.getValue({ key: name })?.value}
                                    onChange={async ({ value }) => {
                                        await this.change({ [name]: value }, 'form');
                                    }}
                                >
                                    {support}
                                </Checkbox>
                            )}
                        </div>
                    );
                },
            )}
        </div>
    );
};

export default renderFields;
