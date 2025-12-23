import React from 'react';

import sliderInit from './methods/sliderInit.ts';

import OrderI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderSlider from './renders/renderSlider.tsx';
import send from './requests/send.ts';
import { orderPrizes } from './static/prizes.ts';

class Order extends React.Component<OrderI['props'], OrderI['state']> implements OrderI {
    parent: OrderI['parent'];
    slider: OrderI['slider'];

    constructor(props: OrderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    prizes = orderPrizes;

    send = send;

    sliderInit = sliderInit;

    renderContent = renderContent;
    renderSlider = renderSlider;
    renderHead = renderHead;

    componentDidMount() {
        this.sliderInit();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        return (
            <div className="popup _inOrder" ref={this.parent}>
                {this.renderContent()}
            </div>
        );
    }
}

export default Order;
