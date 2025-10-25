import React from 'react';
import { connect } from 'react-redux';

import HeaderI from './types.ts';

class Header extends React.Component<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className={`p5kaHeader _SECTION`}>
                <div className="p5kaHeader__inner _INNER">
                    <div className="p5kaHeader__content _COL">
                        <p className="p5kaHeader__support">Акция только в «ПятёрочкЕ»</p>
                        <h1 className="p5kaHeader__title">
                            Выиграйте
                            <img
                                src={require('@media/5ka/slogan-5ka.svg').default}
                                alt=""
                                className="p5kaHeader__titleIcon"
                            />
                            Рублей
                        </h1>
                        <div className="p5kaHeader__prize _COL">
                            <p className="p5kaHeader__prizeSupport">Главный приз</p>
                            <img
                                src={require('@media/5ka/prize-big-1-5ka.png')}
                                alt=""
                                className="p5kaHeader__prizeImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Header);
