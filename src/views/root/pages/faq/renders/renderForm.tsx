import React from 'react';

import AnketForm from '@components/anketForm/AnketForm.tsx';
import { FieldT } from '@components/anketForm/types.ts';

import I from '../types.ts';

const renderForm: I['renderForm'] = function () {
    const { isSuccess, userName, error } = this.state;
    const fields = (Object.keys(this.fields) as (keyof typeof this.fields)[]).map((name) => ({
        name,
        ...this.fields[name],
    })) as FieldT[];

    return (
        <div className="faq__form _FULL_W">
            <AnketForm
                renderHead={() => (
                    <>
                        <div className="faq__formTitle _FULL_W">
                            Если не нашел ответа на свой <br className="_DESKTOP" />
                            вопрос, напиши нам:
                        </div>
                    </>
                )}
                fields={fields}
                send={this.sendForm.bind(this)}
                successTitle={`Спасибо, ${userName}!`}
                successDescription={`Сообщение отправлено, мы\xa0свяжемся с\xa0тобой в\xa0ближайшее время`}
                isSuccess={isSuccess}
                error={error}
            />
        </div>
    );
};

export default renderForm;
