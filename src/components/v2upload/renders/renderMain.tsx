import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderMain: I['renderMain'] = function () {
    const { onChange, title, text, accept } = this.props;
    const resultText =
        text ||
        'Нажмите сюда для загрузки файла <br className="_DESKTOP" />или перенесите его в это окно';

    return (
        <label className="upload__main _FULL _COL _COL_CENTER _CLICK">
            <input type="file" onChange={onChange} accept={accept} />
            <div className="upload__mainHead">
                <i className="upload__mainIcon">
                    <Icon name="upload" />
                </i>
                {title && <span>{title}</span>}
            </div>
            <p
                className="upload__mainDescription"
                dangerouslySetInnerHTML={{ __html: setSpacesInText(resultText) }}
            ></p>
        </label>
    );
};

export default renderMain;
