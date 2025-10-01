import React from 'react';

import getNav from './methods/getNav.ts';

import MenuI from './types.ts';

import renderActions from './renders/renderActions.tsx';
import renderNav from './renders/renderNav.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import prizes from './static/prizes.ts';

class Menu extends React.Component<MenuI['props'], MenuI['state']> implements MenuI {
    parent: MenuI['parent'];

    constructor(props: MenuI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    prizes = prizes;

    getNav = getNav;

    renderNav = renderNav;
    renderActions = renderActions;
    renderPrizes = renderPrizes;

    render() {
        return (
            <div ref={this.parent} className="menu _FULL _SECTION _NOSCROLL">
                <div className="menu__inner _INNER">
                    <div className="menu__head _FULL_W _ROW">
                        <div className="menu__headNav">{this.renderNav()}</div>
                        <div className="menu__headActions">{this.renderActions()}</div>
                    </div>
                    {this.renderPrizes()}
                </div>
            </div>
        );
    }
}

export default Menu;
