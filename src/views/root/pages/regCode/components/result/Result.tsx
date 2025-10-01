import React from 'react';

import ResultI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderFoot from './renders/renderFoot.tsx';

class Result extends React.Component<ResultI['props'], ResultI['state']> implements ResultI {
    parent: ResultI['parent'];

    constructor(props: ResultI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    renderContent = renderContent;
    renderFoot = renderFoot;

    render() {
        return (
            <div className="popup__content">
                {this.renderContent()}
                {this.renderFoot()}
            </div>
        );
    }
}

export default Result;
