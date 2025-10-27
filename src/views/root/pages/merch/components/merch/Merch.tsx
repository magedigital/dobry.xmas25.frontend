import React from 'react';

import EditBlock from '@components/editBlock/EditBlock.tsx';

import checkName from './methods/checkName.ts';
import searchHandler from './methods/searchHandler.ts';
import sliderInit from './methods/sliderInit.ts';

import MerchI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class Merch extends EditBlock<MerchI['props'], MerchI['state']> implements MerchI {
    parent: MerchI['parent'];
    slider: MerchI['slider'];

    constructor(props: MerchI['props']) {
        super(props);
        this.state = {
            items: [],
        };
        this.parent = React.createRef();
    }

    searchHandler = searchHandler;
    sliderInit = sliderInit;
    checkName = checkName;

    renderHead = renderHead;
    renderContent = renderContent;

    async componentDidMount() {
        this.init({ fields: {} });

        if (this.props.merch.custom === '1') {
            await this.searchHandler({ value: '' });
            await this.sliderInit();
        }
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        const { merch } = this.props;

        return (
            <div ref={this.parent} className={`merch _FULL _${merch.code}`}>
                <div className="merch__inner _FULL">
                    {this.renderHead()}
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default Merch;
