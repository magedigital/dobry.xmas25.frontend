import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';

import getScrollPage from './methods/getScrollPage.ts';

import RulesI from './types.ts';

import renderCards from './renders/renderCards.tsx';
import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import cards from './static/cards.ts';

class Rules extends InnerPage<RulesI['props'], RulesI['state']> implements RulesI {
    parent: RulesI['parent'];

    constructor(props: RulesI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';
    cards = cards;

    getScrollPage = getScrollPage;

    renderContent = renderContent;
    renderHead = renderHead;
    renderCards = renderCards;

    componentDidMount(): void {
        this.setClosePosition();
    }

    render() {
        return this.renderPage(
            <>
                <div className="page _rules _NOSCROLL _FULL" onScroll={this.setClosePosition.bind(this)}>
                    <div className="page__inner _FULL_W _COL _COL_H_CENTER">
                        <div className="page__innerBox _INNER _empty">
                            <Media current="desktop">
                                <div className="page__close">
                                    <CloseBtn />
                                </div>
                            </Media>
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </>,
        );
    }
}

export default Rules;
