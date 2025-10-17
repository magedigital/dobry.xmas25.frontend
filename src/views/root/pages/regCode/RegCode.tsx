import React from 'react';
import { connect } from 'react-redux';

import CustomHead from '@components/customHead/CustomHead.tsx';
import InnerPage from '@components/innerPage/InnerPage.tsx';

import getScrollPage from './methods/getScrollPage.ts';
import setRenderKey from './methods/setRenderKey.ts';
import setStep from './methods/setStep.ts';

import RegCodeI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class RegCode extends InnerPage<RegCodeI['props'], RegCodeI['state']> implements RegCodeI {
    parent: RegCodeI['parent'];

    constructor(props: RegCodeI['props']) {
        super(props);
        this.state = {
            currentStep: 'start',
            // currentStep: 'result',
        };

        this.parent = React.createRef();
    }

    innerClassName = 'popup__inner';

    setRenderKey = setRenderKey;
    setStep = setStep;

    getScrollPage = getScrollPage;
    renderContent = renderContent;
    renderHead = renderHead;

    render() {
        return this.renderPage(
            <>
                <CustomHead title="Регистрация кода" />
                {this.renderContent()}
                {this.renderDecors(true)}
            </>,
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(RegCode);
