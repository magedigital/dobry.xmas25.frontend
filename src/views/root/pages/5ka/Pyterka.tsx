import React from 'react';
import { connect } from 'react-redux';

import CustomHead from '@components/customHead/CustomHead.tsx';
import Footer from '@components/footer/Footer.tsx';
import { getLocalContent } from '@functions/localContent.ts';
import { scrollPage } from '@functions/savePageScroll.ts';

import Header from './components/header/Header.tsx';
import Prizes from './components/prizes/Prizes.tsx';
import Products from './components/products/Products.tsx';

import PyterkaI from './types.ts';

import getContent from './requests/getContent.ts';

class Pyterka extends React.Component<PyterkaI['props'], PyterkaI['state']> implements PyterkaI {
    parent: PyterkaI['parent'];

    constructor(props: PyterkaI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('5kaContent'),
        };

        this.parent = React.createRef();
    }

    getContent = getContent;

    componentDidMount(): void {
        const page = this.parent.current!.closest('.body__page') as HTMLElement;

        scrollPage(page, '5ka');

        this.getContent();
    }

    render() {
        const { content } = this.state;

        return (
            <div ref={this.parent} className="index _5ka _FULL_W">
                <CustomHead title="Добрый - 5ка" />
                
                <div className="index__section _FULL_W _header">
                    <Header />
                </div>
                <div className="index__section _FULL_W">
                    <Prizes content={content} />
                </div>
                <div className="index__section _FULL_W">
                    <Products />
                </div>
                <div className="index__section _FULL_W">
                    <Footer content={content?.components.footer} />
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Pyterka);
