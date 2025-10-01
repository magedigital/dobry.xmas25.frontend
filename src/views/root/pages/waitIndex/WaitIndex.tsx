import React from 'react';

import getContent from './methods/getContent.ts';

import WaitIndexI from './types.ts';

import renderBanner from './renders/renderBanner.tsx';
import renderCards from './renders/renderCards.tsx';
import renderContent from './renders/renderContent.tsx';
import renderFoot from './renders/renderFoot.tsx';
import renderHead from './renders/renderHead.tsx';
import renderInfo from './renders/renderInfo.tsx';
import renderTimer from './renders/renderTimer.tsx';
import renderTopBar from './renders/renderTopBar.tsx';

class WaitIndex
    extends React.Component<WaitIndexI['props'], WaitIndexI['state']>
    implements WaitIndexI
{
    parent: WaitIndexI['parent'];

    constructor(props: WaitIndexI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getContent = getContent;

    renderInfo = renderInfo;
    renderTopBar = renderTopBar;
    renderContent = renderContent;
    renderHead = renderHead;
    renderTimer = renderTimer;
    renderCards = renderCards;
    renderBanner = renderBanner;
    renderFoot = renderFoot;

    componentDidMount(): void {
        this.getContent();
    }

    render() {
        const { content } = this.state;

        return (
            <>
                {this.renderInfo()}
                <div ref={this.parent} className={`waitIndex _SECTION ${content ? '_ready' : ''}`}>
                    {this.renderTopBar()}
                    <div className="waitIndex__inner _INNER">{this.renderContent()}</div>
                </div>
            </>
        );
    }
}

export default WaitIndex;
