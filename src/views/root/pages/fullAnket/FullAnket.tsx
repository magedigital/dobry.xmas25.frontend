import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { setPageScroll } from '@functions/savePageScroll.ts';
import { StoreT } from '@global/types.ts';

import getScrollPage from './methods/getScrollPage.ts';

import FullAnketI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderForm from './renders/renderForm.tsx';
import renderHead from './renders/renderHead.tsx';
import sendForm from './requests/sendForm.ts';
import uploadHandler from './requests/uploadHandler.ts';

class FullAnket extends InnerPage<FullAnketI['props'], FullAnketI['state']> implements FullAnketI {
    parent: FullAnketI['parent'];

    constructor(props: FullAnketI['props']) {
        super(props);
        const { storePages, user } = this.props;

        this.state = {
            pointId:
                (storePages['full-anket'].data?.pointId as string) ||
                user?.extraDataRequired?.deliveryAddress?.pointId,
            pointAddress:
                (storePages['full-anket'].data?.pointAddress as string) ||
                (user?.extraDataRequired?.deliveryAddress?.value as string),
            anket: storePages['full-anket'].data?.anket as any,
        };

        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';

    sendForm = sendForm;
    uploadHandler = uploadHandler;

    getScrollPage = getScrollPage;

    renderContent = renderContent;
    renderHead = renderHead;
    renderForm = renderForm;

    componentDidMount(): void {
        this.initPage('fullAnket');
        this.setClosePosition();
    }

    render() {
        const { isReady } = this.state;

        return this.renderPage(
            <>
                <div
                    className={`page _NOSCROLL _FULL ${!isReady ? '_hide' : ''}`}
                    onScroll={(e) => {
                        setPageScroll(e.target as HTMLElement, 'fullAnket');

                        this.setClosePosition();
                    }}
                >
                    <div className="page__inner _FULL_W _COL _COL_H_CENTER">
                        <div className="page__innerWrapper _INNER">
                            <div className="page__innerBox">
                                <Media current="desktop">
                                    <div className="page__close">
                                        <CloseBtn />
                                    </div>
                                </Media>
                                <div className="page__innerContent">{this.renderContent()}</div>
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
        storePages: state.pages,
    };
}

export default connect(mapStateToProps)(FullAnket);
