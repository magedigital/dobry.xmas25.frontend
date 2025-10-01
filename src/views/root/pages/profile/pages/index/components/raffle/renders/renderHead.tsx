import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { title, description } = this.props;

    return (
        <div className="profileRaffle__head _FULL_W _COL _COL_H_CENTER">
            <h4 className="profileRaffle__headTitle">{title}</h4>
            <p
                className="profileRaffle__headDescription"
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>
        </div>
    );
};

export default renderHead;
