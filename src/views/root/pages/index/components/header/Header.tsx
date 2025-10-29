import React from 'react';
import { connect } from 'react-redux';

import Icon from '@components/icon/Icon.tsx';
import { StoreT } from '@global/types.ts';

import advanceRotate from './methods/advanceRotate.ts';
import setSliderTimer from './methods/setSliderTimer.ts';
import sliderInit from './methods/sliderInit.ts';
import startRotate from './methods/startRotate.ts';

import HeaderI from './types.ts';

import renderCarusel from './renders/renderCarusel.tsx';
import renderContent from './renders/renderContent.tsx';
import renderSlider from './renders/renderSlider.tsx';

class Header extends React.Component<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];
    animationId: HeaderI['animationId'];
    sliderTimerId: HeaderI['sliderTimerId'];
    slider: HeaderI['slider'];
    isInit: HeaderI['isInit'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    rotateSpeed = 1;
    rotateDeg = 0;

    startRotate = startRotate;
    advanceRotate = advanceRotate;

    sliderInit = sliderInit;
    setSliderTimer = setSliderTimer;

    renderContent = renderContent;
    renderCarusel = renderCarusel;
    renderSlider = renderSlider;

    componentDidMount(): void {
        this.startRotate();
    }

    componentDidUpdate() {
        if (!this.isInit) {
            this.isInit = true;

            this.sliderInit();
        }
    }

    componentWillUnmount(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }

        if (this.sliderTimerId) {
            clearTimeout(this.sliderTimerId);
        }

        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        return (
            <div ref={this.parent} className="indexHeader _SECTION">
                <div className="indexHeader__inner _INNER">
                    {this.renderContent()}
                    {this.renderCarusel()}
                    {this.renderSlider()}
                    <div className="indexHeader__arrow">
                        <Icon name="index-arrow" />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Header);
