import React from 'react';
import { connect } from 'react-redux';

import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import { getLocalContent } from '@functions/localContent.ts';
import setAsyncState from '@functions/setAsyncState.ts';
import { store } from '@redux/redux.ts';

import getScrollPage from './methods/getScrollPage.ts';
import merchInfoHandler from './methods/merchInfoHandler.ts';
import sliderInit from './methods/sliderInit.ts';

import AlphaPrizeI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderSlider from './renders/renderSlider.tsx';
import getContent from './requests/getContent.ts';
import send from './requests/send.ts';

class AlphaPrize
    extends InnerPage<AlphaPrizeI['props'], AlphaPrizeI['state']>
    implements AlphaPrizeI
{
    parent: AlphaPrizeI['parent'];
    slider: AlphaPrizeI['slider'];

    constructor(props: AlphaPrizeI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('profileContent'),
            currentMerchIndex: 0,
        };

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';

    getContent = getContent;
    send = send;

    getScrollPage = getScrollPage;
    sliderInit = sliderInit;
    merchInfoHandler = merchInfoHandler;

    renderContent = renderContent;
    renderSlider = renderSlider;
    renderHead = renderHead;

    async componentDidMount() {
        super.componentDidMount();

        const storePages = store.getState().pages;

        if (typeof storePages.merch.data?.currentMerchIndex === 'number') {
            await setAsyncState.call(this, {
                currentMerchIndex: storePages.merch.data?.currentMerchIndex,
            });
        }

        this.getContent();
    }

    componentWillUnmount(): void {
        if (this.slider) {
            this.slider.destroy();
        }
    }

    render() {
        return this.renderPage(
            <>
                <CustomHead title="Заказ приза" />

                {this.renderContent()}
            </>,
            undefined,
            true,
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(AlphaPrize);
