import React from 'react';
import { connect } from 'react-redux';

import Fade from '@components/fade/Fade.tsx';
import Pages from '@components/pages/Pages.tsx';
import checkChatbot from '@functions/checkChatbot.ts';
import checkRaffle from '@functions/checkRaffle.ts';
import { StoreT } from '@global/types.ts';

import Cookies from './components/cookies/Cookies.tsx';
import Errors from './components/errors/Errors.tsx';

import RootI from './types.ts';

import WaitIndex from './pages/waitIndex/WaitIndex.tsx';
import renderPopups from './renders/renderPopups.tsx';
import renderTopBar from './renders/renderTopBar.tsx';
import pages from './static/pages.tsx';

const Styles = typeof window !== 'undefined' && require('./components/Styles.tsx').default;

class Root extends React.Component<RootI['props'], RootI['state']> implements RootI {
    parent: RootI['parent'];

    constructor(props: RootI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    pages = pages;

    renderPopups = renderPopups;
    renderTopBar = renderTopBar;

    componentDidMount(): void {
        checkRaffle();
    }

    render() {
        const { rootInit, acceptCookies } = this.props;

        return (
            <>
                {Styles && <Styles />}
                <Errors />
                {this.renderPopups()}
                <div className="body__font">
                    <span>123afs</span>
                    <p>123afs</p>
                    <b>123afs</b>
                </div>
                <Fade className="body__cookies" isShow={!acceptCookies}>
                    <Cookies />
                </Fade>
                <div className={`body__content ${checkChatbot() ? '_chatbot' : ''}`}>
                    {rootInit && (
                        <>
                            {false ? (
                                <>
                                    <div className="body__page" data-show>
                                        <WaitIndex />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Pages
                                        context={this}
                                        pages={this.pages}
                                        filter={(page) =>
                                            !page.level ||
                                            ['login', 'cheque', '404'].includes(page.name)
                                        }
                                    />
                                </>
                            )}
                        </>
                    )}
                </div>
            </>
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        rootInit: state.rootInit,
        acceptCookies: state.acceptCookies,
        user: state.user,
        losvillPopup: state.losvillPopup,
        manPopup: state.manPopup,
        collectionPopup: state.collectionPopup,
        dobroPopup: state.dobroPopup,
        lentaPopup: state.lentaPopup,
    };
}

export default connect(mapStateToProps)(Root);
