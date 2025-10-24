import { v4 } from 'uuid';

import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { StoreT } from '@global/types.ts';

import gameRequest from './methods/gameRequest.ts';
import regRequest from './methods/regRequest.ts';
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
import getSavedRaffle from './utils/getSavedRaffle.ts';

class RafflePrize
    extends InnerPage<RafflePrizeI['props'], RafflePrizeI['state']>
    implements RafflePrizeI
{
    parent: RafflePrizeI['parent'];
    gameId: RafflePrizeI['gameId'];
    isStart: RafflePrizeI['isStart'];

    constructor(props: RafflePrizeI['props']) {
        super(props);

        const savedPrize = getSavedRaffle().prize;

        this.state = {
            prize: savedPrize,
            curIndex: savedPrize ? savedPrize.index : undefined,
            isStart: !!savedPrize,
            isComplete: !!savedPrize,
            isResult: !!savedPrize,
        };

        this.isStart = !!savedPrize;

        this.parent = React.createRef();

        this.gameId = savedPrize?.id || v4();
    }

    startDur = 1_000;
    resultDur = 1_500;

    innerClassName = 'page__innerBox';
    rotateDeg = 0;
    rotateSpeed = 0;

    sliderInit = sliderInit;

    start = start;
    startCarusel = startCarusel;

    gameRequest = gameRequest;
    regRequest = regRequest;

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
        user: state.user,
    };
}

export default connect(mapStateToProps)(RafflePrize);
