import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { getLocalContent } from '@functions/localContent.ts';
import { StoreT } from '@global/types.ts';

import getScrollPage from './methods/getScrollPage.ts';
import scrollToTab from './methods/scrollToTab.ts';
import setPagesRenderKey from './methods/setPagesRenderKey.ts';

import PrizesI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderPages from './renders/renderPages.tsx';
import getContent from './requests/getContent.ts';
import pages from './static/pages.tsx';

class Prizes extends InnerPage<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('indexContent'),
        };
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';
    pages = pages;

    getScrollPage = getScrollPage;
    setPagesRenderKey = setPagesRenderKey;
    scrollToTab = scrollToTab;
    getContent = getContent;

    renderContent = renderContent;
    renderHead = renderHead;

    renderPages = renderPages;

    componentDidMount(): void {
        this.getContent();
        this.setClosePosition();
        this.scrollToTab(true);
    }

    render() {
        return this.renderPage(
            <>
                <div
                    className="page _profile _NOSCROLL _FULL"
                    onScroll={this.setClosePosition.bind(this)}
                >
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

function mapStateToProps(state: StoreT) {
    return {
        storePages: state.pages,
    };
}

export default connect(mapStateToProps)(Prizes);
