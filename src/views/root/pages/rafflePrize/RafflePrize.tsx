import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { StoreT } from '@global/types.ts';

import sliderInit from './methods/sliderInit.ts';
import start from './methods/start.ts';
import startCarusel from './methods/startCarusel.ts';

import RafflePrizeI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderResultForm from './renders/renderResultForm.tsx';
import renderSlider from './renders/renderSlider.tsx';
import renderSpinner from './renders/renderSpinner.tsx';
import renderStartForm from './renders/renderStartForm.tsx';

class RafflePrize
    extends InnerPage<RafflePrizeI['props'], RafflePrizeI['state']>
    implements RafflePrizeI
{
    parent: RafflePrizeI['parent'];

    constructor(props: RafflePrizeI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';
    rotateDeg = 0;
    rotateSpeed = 0;

    sliderInit = sliderInit;

    start = start;
    startCarusel = startCarusel;

    renderContent = renderContent;
    renderHead = renderHead;
    renderSlider = renderSlider;
    renderSpinner = renderSpinner;

    renderStartForm = renderStartForm;
    renderResultForm = renderResultForm;

    componentDidMount(): void {
        super.componentDidMount();

        this.sliderInit();
    }

    render() {
        return this.renderPage(
            <>
                <div
                    className="page _rafflePrize _NOSCROLL _FULL"
                    onScroll={this.setClosePosition.bind(this)}
                >
                    <div className="page__inner _FULL_W _COL _COL_H_CENTER">
                        <div className="page__innerWrapper _INNER">
                            <div className="page__innerBox _empty">
                                <Media current="desktop">
                                    <div className="page__close">
                                        <CloseBtn />
                                    </div>
                                </Media>
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </>,
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        storePages: state.pages,
    };
}

export default connect(mapStateToProps)(RafflePrize);
