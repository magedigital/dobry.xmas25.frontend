import React from 'react';
import { connect } from 'react-redux';

import Footer from '@components/footer/Footer.tsx';
import { getLocalContent } from '@functions/localContent.ts';

import PublicPage from '../../components/publicPage/PublicaPage.tsx';
import App from './components/app/App.tsx';
import Header from './components/header/Header.tsx';
import Map from './components/map/Map.tsx';

import IndexI from './types.ts';

import getContent from './requests/getContent.ts';

class Index extends PublicPage<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('indexContent'),
        };

        this.parent = React.createRef();
    }

    name = 'index';

    getContent = getContent;

    componentDidMount(): void {
        super.componentDidMount();

        this.getContent();
    }

    render() {
        const { content } = this.state;

        return this.renderPage({
            name: 'index',
            render: () => (
                <div className="index _FULL_W">
                    <div className="index__section _FULL_W">
                        <Header />
                    </div>
                    <div className="index__section _FULL_W">
                        <Map getScrollNode={() => this.scrollNode.current} />
                    </div>
                    <div className="index__section _FULL_W">
                        <App />
                    </div>
                    <div className="index__section _FULL_W">
                        <Footer content={content?.components.footer} />
                    </div>
                </div>
            ),
        });
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Index);
