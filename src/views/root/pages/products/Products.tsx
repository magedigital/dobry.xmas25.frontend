import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { getLocalContent } from '@functions/localContent.ts';

import getScrollPage from './methods/getScrollPage.ts';

import ProductsI from './types.ts';

import renderCards from './renders/renderCards.tsx';
import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import getContent from './requests/getContent.tsx';

class Products extends InnerPage<ProductsI['props'], ProductsI['state']> implements ProductsI {
    parent: ProductsI['parent'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {
            current: 0,
            content: getLocalContent('productsContent'),
        };
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';

    getScrollPage = getScrollPage;

    getContent = getContent;

    renderContent = renderContent;
    renderHead = renderHead;
    renderCards = renderCards;

    componentDidMount(): void {
        this.initPage('products');

        this.getContent();
        this.setClosePosition();
    }

    render() {
        const { isReady } = this.state;

        return this.renderPage(
            <>
                <CustomHead title="Продукты-участники" />
                
                <div
                    className={`page _rules _NOSCROLL _FULL ${!isReady ? '_hide' : ''}`}
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

export default Products;
