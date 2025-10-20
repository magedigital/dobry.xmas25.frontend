import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { isComplete, isResult, isStart } = this.state;

    return (
        <div className="page__content _FULL_W _COL _COL_H_CENTER">
            {this.renderHead()}
            <div
                className={`rafflePrize _FULL_W ${isStart ? '_start' : ''} ${isComplete ? '_complete' : ''} ${isResult ? '_result' : ''}`}
            >
                {this.renderSlider()}
                {this.renderSpinner()}
                {this.renderStartForm()}
                {this.renderResultForm()}
            </div>
        </div>
    );
};

export default renderContent;
