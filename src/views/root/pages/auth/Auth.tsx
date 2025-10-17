import React from 'react';
import { connect } from 'react-redux';

import InnerPage from '@components/innerPage/InnerPage.tsx';
import Pages from '@components/pages/Pages.tsx';

import getScrollPage from './methods/getScrollPage.ts';

import AuthI from './types.ts';

import pages from './static/pages.tsx';

class Auth extends InnerPage<AuthI['props'], AuthI['state']> implements AuthI {
    parent: AuthI['parent'];

    constructor(props: AuthI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';

    pages = pages;

    getScrollPage = getScrollPage;

    render() {
        return this.renderPage(
            <>
                <Pages
                    context={this}
                    pages={this.pages}
                    filter={(page) => page.parentName === 'auth'}
                    callback={() => {
                        this.setClosePosition();
                    }}
                    itemClass="body__page _auth _NOSCROLL"
                    parentName="auth"
                />
                {this.renderDecors()}
            </>,
            undefined,
            true,
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Auth);
