import React from 'react';

import sliderInit from './methods/sliderInit.ts';

import RaffleI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class Raffle extends React.Component<RaffleI['props'], RaffleI['state']> implements RaffleI {
    parent: RaffleI['parent'];
    slider: RaffleI['slider'];

    constructor(props: RaffleI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    sliderInit = sliderInit;

    renderHead = renderHead;
    renderContent = renderContent;

    componentDidMount(): void {
        this.sliderInit();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        return (
            <div ref={this.parent} className="profileRaffle _FULL">
                {this.renderHead()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Raffle;
