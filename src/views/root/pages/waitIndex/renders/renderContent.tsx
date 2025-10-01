import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <>
            {this.renderTimer()}
            <div className="waitIndex__content">
                {this.renderHead()}
                {this.renderCards()}
                {this.renderBanner()}
            </div>
            {this.renderFoot()}
        </>
    );
};

export default renderContent;
