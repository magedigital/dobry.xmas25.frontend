import React from 'react';
import { connect } from 'react-redux';

import InnerPage from '@components/innerPage/InnerPage.tsx';
import { StoreT } from '@global/types.ts';

import copyHandler from './methods/copyHandler.ts';
import getScrollPage from './methods/getScrollPage.ts';

import InviteI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class Invite extends InnerPage<InviteI['props'], InviteI['state']> implements InviteI {
    parent: InviteI['parent'];
    timerId: InviteI['timerId'];

    constructor(props: InviteI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';

    copyHandler = copyHandler;
    getScrollPage = getScrollPage;

    renderContent = renderContent;
    renderHead = renderHead;

    componentWillUnmount(): void {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
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

function mapStateToProps(state: StoreT) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Invite);
