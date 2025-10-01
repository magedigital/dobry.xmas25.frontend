import React from 'react';
import { connect } from 'react-redux';

import Footer from '@components/footer/Footer.tsx';
import { getLocalContent } from '@functions/localContent.ts';
import { scrollPage } from '@functions/savePageScroll.ts';

import About from './components/about/About.tsx';
import App from './components/app/App.tsx';
import Header from './components/header/Header.tsx';

import IndexI from './types.ts';

import getContent from './requests/getContent.ts';

class Index extends React.Component<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('indexContent'),
        };

        this.parent = React.createRef();
    }

    getContent = getContent;

    componentDidMount(): void {
        const page = this.parent.current!.closest('.body__page') as HTMLElement;

        scrollPage(page, 'index');

        this.getContent();
    }

    render() {
        const { content } = this.state;

        return (
            <div ref={this.parent} className="index _FULL_W">
                <div className="index__section _FULL_W">
                    <Header />
                </div>
                <div className="index__section _FULL_W _about">
                    <About content={content} />
                </div>
                <div className="index__section _FULL_W">
                    <App />
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

export default connect(mapStateToProps)(Index);
