import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { getLocalContent } from '@functions/localContent.ts';
import { setPageScroll } from '@functions/savePageScroll.ts';

import getScrollPage from './methods/getScrollPage.ts';

import WinnersI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderTable from './renders/renderTable.tsx';
import renderWinners from './renders/renderWinners.tsx';
import getContent from './requests/getContent.ts';

class Winners extends InnerPage<WinnersI['props'], WinnersI['state']> implements WinnersI {
    parent: WinnersI['parent'];

    constructor(props: WinnersI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('indexContent'),
        };
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';

    getContent = getContent;
    getScrollPage = getScrollPage;

    renderContent = renderContent;
    renderHead = renderHead;
    renderWinners = renderWinners;
    renderTable = renderTable;

    componentDidMount(): void {
        this.initPage('winners');

        this.getContent();
        this.setClosePosition();

        this.init({ fields: {} });
    }

    render() {
        const { isReady } = this.state;

        return this.renderPage(
            <>
                <CustomHead title="Победители" />
                <div
                    className={`page _winners _NOSCROLL _FULL ${!isReady ? '_hide' : ''}`}
                    onScroll={(e) => {
                        setPageScroll(e.target as HTMLElement, 'winners');

                        this.setClosePosition();
                    }}
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

export default Winners;
