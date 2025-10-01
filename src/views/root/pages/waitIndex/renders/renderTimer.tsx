import React from 'react';

import I from '../types.ts';

const renderTimer: I['renderTimer'] = function () {
    const { content } = this.state;

    return (
        <div className="waitIndex__timer _COL">
            <div className="waitIndex__timerInner _COL _COL_CENTER">
                <p className="waitIndex__timerSupport">
                    до старта
                    <br />
                    акции
                </p>
                <p className="waitIndex__timerValue">{content?.components.counter.days}</p>
                <p className="waitIndex__timerText">{content?.components.counter.daysTitle}</p>
            </div>
        </div>
    );
};

export default renderTimer;
