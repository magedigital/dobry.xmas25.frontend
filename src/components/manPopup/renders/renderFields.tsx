import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import Field from '@components/field/Field.tsx';
import Upload from '@components/v2upload/Upload.tsx';

import I from '../types.ts';

import { FieldT, manPopupFields } from '../static/fields.tsx';

const renderFields: I['renderFields'] = function () {
    return (
        <div className="popup__bannerFields _FULL_W">
            {(Object.keys(manPopupFields) as (keyof typeof manPopupFields)[]).map((name) => {
                const field = manPopupFields[name] as FieldT;
                const support =
                    typeof field.support === 'function' ? field.support.call(this) : field.support;

                return (
                    <div className={`popup__bannerField _${name} _type-${field.type}`} key={name}>
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
                        {field.type === 'upload' && (
                            <Upload
                                className="_mediumTextSize"
                                accept=".mov,.mp4,.mkv"
                                fileName={this.getValue({ key: name })?.value as string}
                                onChange={async ({ target: { files } }) => {
                                    if (files && files[0]) {
                                        const file = files[0];

                                        this.formData.set('video', file);

                                        await this.change({ [name]: file.name }, 'form');
                                    }
                                }}
                                title="Загрузить видео-визитку"
                                text="Не более 60 секунд — покажи за это время, как круто и необычно ты умеешь прятаться. Будь смелым, креативным, смешным или оригинальным. Видео должно быть чётким, качественным и без звуковых помех (файл не более 50 мб, форматы: mov, mp4 или mkv, разрешение: от 720p)."
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
            })}
        </div>
    );
};

export default renderFields;
