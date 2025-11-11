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
            <>
                <div ref={this.parent} className={`p5kaHeader _SECTION`}>
                    <div className="p5kaHeader__lights-container">
                        <div className="p5kaHeader__lights"></div>
                        <div className="p5kaHeader__lights"></div>
                        <div className="p5kaHeader__lights"></div>
                    </div>
                    <div className="p5kaHeader__inner _INNER">
                        <svg
                            width="122"
                            height="50"
                            viewBox="0 0 122 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="p5kaHeader__inner_glasses"
                            filter="url(#verticalBlur)"
                        >
                            <defs>
                                <filter
                                    id="verticalBlur"
                                    x="-10%"
                                    y="-20%"
                                    width="120%"
                                    height="140%"
                                >
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="0 3" />
                                </filter>
                                <mask id="mask1">
                                    <path
                                        d="M51.5 19.2531C46.5 33.7531 43 43.2506 24 41.7519C4 38.7506 0 36.752 0 16.252C-3.99816e-09 -0.249033 5 -1.24793 30 0.752271C45 2.41936 56.5 4.75309 51.5 19.2531Z"
                                        fill="white"
                                    />
                                </mask>
                                <mask id="mask2">
                                    <path
                                        d="M121.499 27.2519C118.766 47.7515 114.001 49.2515 103.001 49.2515C92.5008 43.7515 88.5008 42.2515 80.5008 38.7515C78.0008 33.2515 75.9102 27.4313 75.5004 20.2516C74.5585 3.75157 84.999 7.75176 99.499 7.75167C114.499 9.41876 123.766 10.2519 121.499 27.2519Z"
                                        fill="white"
                                    />
                                </mask>
                                <linearGradient
                                    id="glareGradient"
                                    x1="0%"
                                    y1="100%"
                                    x2="100%"
                                    y2="80%"
                                >
                                    <stop offset="40.5%" stopColor="#FFE7A5" stopOpacity="0" />
                                    <stop offset="41%" stopColor="#FFE7A5" stopOpacity="0.7" />
                                    <stop offset="100%" stopColor="#FFE7A5" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <rect
                                x="0"
                                y="0"
                                width="60"
                                height="50"
                                fill="url(#glareGradient)"
                                mask="url(#mask1)"
                            >
                                <animate
                                    attributeName="x"
                                    values="70;-300"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="0"
                                y="0"
                                width="60"
                                height="50"
                                fill="url(#glareGradient)"
                                mask="url(#mask2)"
                            >
                                <animate
                                    attributeName="x"
                                    values="150;-220"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </svg>

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
                                <div className="p5kaHeader__prizeBox">
                                    <img
                                        src={require('@media/5ka/dop/prize-big-1-5ka-0.png')}
                                        alt=""
                                        className="p5kaHeader__prizeImage _1"
                                    />
                                    <img
                                        src={require('@media/5ka/dop/prize-big-1-5ka-1.png')}
                                        alt=""
                                        className="p5kaHeader__prizeImage _2"
                                    />
                                    <img
                                        src={require('@media/5ka/dop/prize-big-1-5ka-2.png')}
                                        alt=""
                                        className="p5kaHeader__prizeImage _3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Header);
