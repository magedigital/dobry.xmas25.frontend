import React from 'react';

import Fade from '@components/fade/Fade.tsx';

import Menu from '../components/menu/Menu.tsx';

import I from '../types.ts';

const renderMenu: I['renderMenu'] = function () {
    const { isShowMenu } = this.state;

    return (
        <Fade className="topBar__menu _FULL_W" isShow={!!isShowMenu}>
            <Menu handler={this.menuHandler.bind(this)} />
        </Fade>
    );
};

export default renderMenu;
