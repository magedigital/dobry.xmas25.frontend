import React from 'react';
import { connect } from 'react-redux';

import InnerPage from '@components/innerPage/InnerPage.tsx';
import { getLocalContent } from '@functions/localContent.ts';

import getScrollPage from './methods/getScrollPage.ts';

import BallsI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import getContent from './requests/getContent.ts';

class Balls extends InnerPage<BallsI['props'], BallsI['state']> implements BallsI {
    parent: BallsI['parent'];

    constructor(props: BallsI['props']) {
        super(props);
        this.state = {
            data: getLocalContent('profileData'),
        };

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';

    getContent = getContent;

    getScrollPage = getScrollPage;
    renderContent = renderContent;
    renderHead = renderHead;

    componentDidMount(): void {
        this.getContent();
    }

    render() {
        return this.renderPage(
            <>
                {this.renderContent()}
                {this.renderDecors(true)}
            </>,
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Balls);
