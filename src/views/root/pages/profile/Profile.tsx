import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import changePage from '@functions/changePage.ts';
import { getLocalContent } from '@functions/localContent.ts';
import { setPageScroll } from '@functions/savePageScroll.ts';
import { StoreT } from '@global/types.ts';

import copyHandler from './methods/copyHandler.ts';
import getScrollPage from './methods/getScrollPage.ts';
import setPagesRenderKey from './methods/setPagesRenderKey.ts';

import ProfileI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPages from './renders/renderPages.tsx';
import getContent from './requests/getContent.ts';
import requestLogout from './requests/requestLogout.ts';
import pages from './static/pages.tsx';

class Profile extends InnerPage<ProfileI['props'], ProfileI['state']> implements ProfileI {
    parent: ProfileI['parent'];

    constructor(props: ProfileI['props']) {
        super(props);

        this.state = {
            data: getLocalContent('profileData'),
            content: getLocalContent('profileContent'),
        };

        this.getContent = this.getContent.bind(this);

        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';
    pages = pages;

    getScrollPage = getScrollPage;
    setPagesRenderKey = setPagesRenderKey;
    copyHandler = copyHandler;

    requestLogout = requestLogout;
    getContent = getContent;

    renderContent = renderContent;
    renderHead = renderHead;
    renderMain = renderMain;
    renderPages = renderPages;

    componentDidMount(): void {
        const { user } = this.props;

        super.componentDidMount();

        if (user?.status === 'EMAIL_CONFIRM_REQUIRED') {
            changePage({ pageName: 'auth-reg' });
            return;
        }

        if (user?.status === 'ANKET_REQUIRED') {
            changePage({ pageName: 'anket' });

            return;
        }

        this.initPage('profile');

        this.getContent();
        this.setClosePosition();

        document.addEventListener('getProfileContent', this.getContent);
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();

        document.removeEventListener('getProfileContent', this.getContent);
    }

    render() {
        const { isReady } = this.state;

        return this.renderPage(
            <>
                <CustomHead title="Личный кабинет" />
                <div
                    className={`page _profile _NOSCROLL _FULL ${!isReady ? '_hide' : ''}`}
                    onScroll={(e) => {
                        setPageScroll(e.target as HTMLElement, 'profile');

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

function mapStateToProps(state: StoreT) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Profile);
