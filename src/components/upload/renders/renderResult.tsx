import React from 'react';

import Fade from '@components/fade/Fade.tsx';

import I from '../types.ts';

const renderResult: I['renderResult'] = function () {
    const { fileName, onChange, accept } = this.props;

    return (
        <Fade className="upload__result _FULL _COL _COL_CENTER" isShow={!!fileName}>
            <p className="upload__resultName">{fileName}</p>
            <label className="upload__resultButton _CLICK">
                <input type="file" onChange={onChange} accept={accept} />
                Загрузить еще
            </label>
        </Fade>
    );
};

export default renderResult;
