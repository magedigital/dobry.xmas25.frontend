import React from 'react';
import { connect } from 'react-redux';

import InnerPage from '@components/innerPage/InnerPage.tsx';

import getScrollPage from './methods/getScrollPage.ts';

import FedukPrizeI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class FedukPrize
    extends InnerPage<FedukPrizeI['props'], FedukPrizeI['state']>
    implements FedukPrizeI
{
    parent: FedukPrizeI['parent'];

    constructor(props: FedukPrizeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';

    getScrollPage = getScrollPage;
    renderContent = renderContent;
    renderHead = renderHead;

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

export default connect(mapStateToProps)(FedukPrize);
