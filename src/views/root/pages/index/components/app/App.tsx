import React from 'react';
import { connect } from 'react-redux';

import AppI from './types.ts';

import renderBackLine from './renders/renderBackLine.tsx';
import renderContent from './renders/renderContent.tsx';
import renderContentDecors from './renders/renderContentDecors.tsx';
import renderDecors from './renders/renderDecors.tsx';
import renderHead from './renders/renderHead.tsx';

class App extends React.Component<AppI['props'], AppI['state']> implements AppI {
    parent: AppI['parent'];

    constructor(props: AppI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderHead = renderHead;
    renderContent = renderContent;
    renderContentDecors = renderContentDecors;
    renderDecors = renderDecors;
    renderBackLine = renderBackLine;

    render() {
        return (
            <div ref={this.parent} className="indexApp _SECTION">
                {this.renderDecors()}
                <div className="indexApp__inner _INNER">
                    <div className="indexApp__innerContent">
                        {this.renderContentDecors()}
                        <div className="indexApp__innerContentBox _FULL">
                            {this.renderBackLine()}
                            {this.renderHead()}
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(App);
