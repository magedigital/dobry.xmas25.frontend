import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';
import Media from '@components/media/Media.tsx';
import { getLocalContent } from '@functions/localContent.ts';
import { setPageScroll } from '@functions/savePageScroll.ts';

import getScrollPage from './methods/getScrollPage.ts';

import FaqI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderFaq from './renders/renderFaq.tsx';
import renderForm from './renders/renderForm.tsx';
import renderHead from './renders/renderHead.tsx';
import renderQuestions from './renders/renderQuestions.tsx';
import getContent from './requests/getContent.ts';
import sendForm from './requests/sendForm.ts';
import fields from './static/fields.ts';

class Faq extends InnerPage<FaqI['props'], FaqI['state']> implements FaqI {
    parent: FaqI['parent'];

    constructor(props: FaqI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('faqContent'),
        };
        this.parent = React.createRef();
    }

    innerClassName = 'page__innerBox';
    fields = fields;

    getScrollPage = getScrollPage;

    sendForm = sendForm;
    getContent = getContent;

    renderContent = renderContent;
    renderHead = renderHead;
    renderFaq = renderFaq;
    renderQuestions = renderQuestions;
    renderForm = renderForm;

    componentDidMount(): void {
        this.initPage('faq');

        this.getContent();
        this.setClosePosition();
    }

    render() {
        const { isReady } = this.state;

        return this.renderPage(
            <>
                <CustomHead title="Вопрос-ответ" />

                <div
                    className={`page _faq _NOSCROLL _FULL ${!isReady ? '_hide' : ''}`}
                    onScroll={(e) => {
                        setPageScroll(e.target as HTMLElement, 'faq');

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

export default Faq;
