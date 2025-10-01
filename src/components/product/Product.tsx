import React from 'react';

import { ListenerT } from '@global/types.ts';

import checkSlider from './methods/checkSlider.ts';
import rotateHandler from './methods/rotateHandler.ts';
import sliderInit from './methods/sliderInit.ts';
import stopEvents from './methods/stopEvents.ts';

import ProductI from './types.ts';

import renderBack from './renders/renderBack.tsx';
import renderMain from './renders/renderMain.tsx';
import renderMainSlider from './renders/renderMainSlider.tsx';

class Product extends React.Component<ProductI['props'], ProductI['state']> implements ProductI {
    parent: ProductI['parent'];
    timerId: ProductI['timerId'];
    slider: ProductI['slider'];

    constructor(props: ProductI['props']) {
        super(props);
        this.state = {};

        this.stopEvents = this.stopEvents.bind(this);

        this.parent = React.createRef();
    }

    rotateHandler = rotateHandler;
    sliderInit = sliderInit;
    checkSlider = checkSlider;
    stopEvents = stopEvents;

    renderMain = renderMain;
    renderBack = renderBack;
    renderMainSlider = renderMainSlider;

    componentDidMount(): void {
        this.checkSlider();
    }

    componentDidUpdate() {
        this.checkSlider();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }

        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        const buttons = this.parent.current!.querySelectorAll('.product__button');

        buttons.forEach((button) => {
            (button.removeEventListener as ListenerT)('touchstart', this.stopEvents, {
                passive: false,
            });
            (button.removeEventListener as ListenerT)('mousedown', this.stopEvents, {
                passive: false,
            });
        });
    }

    render() {
        const { isRotate, isRotateComplete } = this.state;

        return (
            <div
                ref={this.parent}
                className={`product ${isRotate ? '_rotate' : ''} ${isRotateComplete ? '_rotateComplete' : ''}`}
            >
                {this.renderMain()}
                {this.renderBack()}
            </div>
        );
    }
}

export default Product;
