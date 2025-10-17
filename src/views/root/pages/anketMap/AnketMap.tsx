import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { StoreT } from '@global/types.ts';

import getScrollPage from './methods/getScrollPage.ts';
import widgetInit from './methods/widgetInit.ts';
import widgetLoad from './methods/widgetLoad.ts';

import AnketMapI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import cards from './static/cards.ts';

class AnketMap extends InnerPage<AnketMapI['props'], AnketMapI['state']> implements AnketMapI {
    parent: AnketMapI['parent'];
    fivepost: AnketMapI['fivepost'];

    constructor(props: AnketMapI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';
    cards = cards;

    getScrollPage = getScrollPage;
    widgetLoad = widgetLoad;
    widgetInit = widgetInit;

    renderContent = renderContent;
    renderHead = renderHead;

    componentDidMount(): void {
        this.widgetLoad();
        this.setClosePosition();
    }

    componentWillUnmount(): void {
        if (this.fivepost) {
            this.fivepost.destroy();
        }
    }

    render() {
        return this.renderPage(
            <>
                <div
                    className="page _anketMap _NOSCROLL _FULL"
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

export default connect(mapStateToProps)(AnketMap);
