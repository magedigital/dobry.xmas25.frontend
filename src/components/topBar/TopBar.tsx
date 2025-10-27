import React from 'react';
import { connect } from 'react-redux';

import { StoreT } from '@global/types.ts';

import menuHandler from './methods/menuHandler.ts';

import TopBarI from './types.ts';

import render5kaAlert from './renders/render5kaAlert.tsx';
import render5kaHead from './renders/render5kaHead.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMenu from './renders/renderMenu.tsx';

class TopBar extends React.Component<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {
            isShowMenu: false,
            isShowIndex: this.props.storePages.index.isShow,
        };

        this.parent = React.createRef();
    }

    menuHandler = menuHandler;

    renderHead = renderHead;
    render5kaHead = render5kaHead;
    renderMenu = renderMenu;
    render5kaAlert = render5kaAlert;

    render() {
        const { isShowMenu } = this.state;
        const { storePages, isFix, className = '' } = this.props;

        const is5ka = storePages['5ka'].isShow;

        return (
            <div
                ref={this.parent}
                className={`topBar _FULL ${isShowMenu ? '_showMenu' : ''} ${isFix ? '_fix' : ''} ${is5ka ? '_5ka' : ''} ${className}`}
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
