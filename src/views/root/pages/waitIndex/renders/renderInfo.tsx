import React from 'react';

import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderInfo: I['renderInfo'] = function () {
    return (
        <div className="body__actionInfo">
            <div
                className="body__actionInfoInner"
                dangerouslySetInnerHTML={{
                    __html: setSpacesInText(
                        'Летняя Акция завершена, выдача призов производится в срок до 15.10.2025 включительно. По вопросам получения призов обратитесь к Организатору Акции <br class="_MOBILE" />на <a href="dobrycola@thediversity.ru" target="_blank">dobrycola@thediversity.ru</a>',
                    ),
                }}
            ></div>
        </div>
    );
};

export default renderInfo;
