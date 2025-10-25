import React from 'react';
import { connect } from 'react-redux';

import Footer from '@components/footer/Footer.tsx';
import { getLocalContent } from '@functions/localContent.ts';

import PublicPage from '../../components/publicPage/PublicaPage.tsx';
import Header from './components/header/Header.tsx';
import Prizes from './components/prizes/Prizes.tsx';
import Steps from './components/steps/Steps.tsx';

import PyterkaI from './types.ts';

import getContent from './requests/getContent.ts';

class Pyterka extends PublicPage<PyterkaI['props'], PyterkaI['state']> implements PyterkaI {
    parent: PyterkaI['parent'];

    constructor(props: PyterkaI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('5kaContent'),
        };

        this.parent = React.createRef();
    }

    name = '5ka';

    getContent = getContent;

    componentDidMount(): void {
        super.componentDidMount();

        this.getContent();
    }

    render() {
        const { content } = this.state;

        return this.renderPage({
            name: '5ka',
            render: () => (
                <div className="index _FULL_W">
                    <div className="index__section _FULL_W">
                        <Header />
                    </div>
                    <div className="index__section _FULL_W">
                        <Steps />
                    </div>
                    <div className="index__section _FULL_W">
                        <Prizes />
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

export default connect(mapStateToProps)(Pyterka);
