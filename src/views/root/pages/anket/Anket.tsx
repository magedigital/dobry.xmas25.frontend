import React from 'react';
import { connect } from 'react-redux';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { StoreT } from '@global/types.ts';

import getScrollPage from './methods/getScrollPage.ts';

import AnketI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderForm from './renders/renderForm.tsx';
import renderHead from './renders/renderHead.tsx';
import sendForm from './requests/sendForm.ts';
import fields from './static/fields.ts';

class Anket extends InnerPage<AnketI['props'], AnketI['state']> implements AnketI {
    parent: AnketI['parent'];

    constructor(props: AnketI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    fields = fields;
    innerClassName = 'page__innerBox';

    sendForm = sendForm;

    getScrollPage = getScrollPage;

    renderContent = renderContent;
    renderHead = renderHead;
    renderForm = renderForm;

    componentDidMount(): void {
        this.setClosePosition();
    }

    render() {
        const { user } = this.props;

        return this.renderPage(
            <>
                <div className="page _NOSCROLL _FULL" onScroll={this.setClosePosition.bind(this)}>
                    <div className="page__inner _FULL_W _COL _COL_H_CENTER">
                        <div className="page__innerWrapper _INNER">
                            <div className="page__innerBox">
                                {user?.status !== 'ANKET_REQUIRED' && (
                                    <Media current="desktop">
                                        <div className="page__close">
                                            <CloseBtn />
                                        </div>
                                    </Media>
                                )}

                                <div className="page__innerContent">{this.renderContent()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>,
            user?.status !== 'ANKET_REQUIRED',
        );
    }
}

function mapStateToProps(state: StoreT) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Anket);
