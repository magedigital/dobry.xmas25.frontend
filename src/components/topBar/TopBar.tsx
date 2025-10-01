import React from 'react';
import { connect } from 'react-redux';

import { StoreT } from '@global/types.ts';

import menuHandler from './methods/menuHandler.ts';
import scrollHandler from './methods/scrollHandler.ts';

import TopBarI from './types.ts';

import render5kaHead from './renders/render5kaHead.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMenu from './renders/renderMenu.tsx';
import render5kaAlert from './renders/render5kaAlert.tsx';

class TopBar extends React.Component<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {
            isShowMenu: false,
        };

        this.scrollHandler = this.scrollHandler.bind(this);

        this.parent = React.createRef();
    }

    menuHandler = menuHandler;
    scrollHandler = scrollHandler;

    renderHead = renderHead;
    render5kaHead = render5kaHead;
    renderMenu = renderMenu;
    render5kaAlert=render5kaAlert

    componentDidMount(): void {
        window.addEventListener('scroll', this.scrollHandler, true);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.scrollHandler, true);
    }

    render() {
        const { isShowMenu } = this.state;
        const { storePages } = this.props;
        const isFix = this.state.isFix || (!storePages.index.isShow && !storePages['5ka'].isShow);
        const is5ka = storePages['5ka'].isShow;

        return (
            <div
                ref={this.parent}
                className={`topBar _FULL ${isShowMenu ? '_showMenu' : ''} ${isFix ? '_fix' : ''} ${is5ka ? '_5ka' : ''}`}
            >
                {this.renderHead()}
                {this.render5kaHead()}
                {this.render5kaAlert()}
                {this.renderMenu()}
            </div>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        storePages: state.pages,
    };
}

export default connect(mapStateToProps)(TopBar);
