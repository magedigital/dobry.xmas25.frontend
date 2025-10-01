import React from 'react';

import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    return (
        <div className="waitIndex__foot">
            <p
                className="waitIndex__footText"
                dangerouslySetInnerHTML={{
                    __html: setSpacesInText(
                        'Срок проведения акции - с 01.11.2025 по 31.03.2026. Информацию об организаторе акции, правилах ее проведения, количестве призов, сроках, месте и порядке их получения см. на dobrycola-promo.ru. Внешний вид товаров и призов может отличаться от их изображения в рекламных материалах. «Добрый» является зарегистрированным товарным знаком. © 2025. АО «Мултон». Все права защищены. * Подробности смотрите в правилах акции.',
                    ),
                }}
            ></p>
        </div>
    );
};

export default renderFoot;
