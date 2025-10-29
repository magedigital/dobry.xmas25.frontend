import React from 'react';
import { connect } from 'react-redux';

import CustomHead from '@components/customHead/CustomHead.tsx';
import { store } from '@redux/redux.ts';

import sliderInit from './methods/sliderInit.ts';

import PrizesPageI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class PrizesPage
    extends React.Component<PrizesPageI['props'], PrizesPageI['state']>
    implements PrizesPageI
{
    parent: PrizesPageI['parent'];
    slider: PrizesPageI['slider'];

    constructor(props: PrizesPageI['props']) {
        super(props);
        this.state = {
            needSlider: this.props.items.length > 4 || store.getState().device === 'mobile',
        };

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
        const { needSlider } = this.state;
        const { metaTitle, name } = this.props;

        return (
            <div
                ref={this.parent}
                className={`prizesPage _FULL_W _COL _COL_H_CENTER _${name} ${needSlider ? '_slider' : ''}`}
            >
                <CustomHead title={metaTitle} />

                {this.renderHead()}
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(PrizesPage);
