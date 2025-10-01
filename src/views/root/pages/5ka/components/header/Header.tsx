import React from 'react';
import { connect } from 'react-redux';

import HeaderI from './types.ts';

import renderBack from './renders/renderBack.tsx';

class Header extends React.Component<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderBack = renderBack;

    render() {
        return (
            <div ref={this.parent} className={`indexHeader _SECTION _5ka`}>
                <div className="indexHeader__inner _INNER">
                    <div className="indexHeader__5ka">Акция только в «Пятёрочке»</div>
                </div>
                {this.renderBack()}
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Header);
