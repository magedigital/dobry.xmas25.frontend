import React from 'react';

import promoHandler from './methods/promoHandler.ts';

import PrizeI from './types.ts';

import renderFoot from './renders/renderFoot.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPreview from './renders/renderPreview.tsx';
import renderPromo from './renders/renderPromo.tsx';

class Prize extends React.Component<PrizeI['props'], PrizeI['state']> implements PrizeI {
    parent: PrizeI['parent'];
    promoTimerId: PrizeI['promoTimerId'];

    constructor(props: PrizeI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    promoHandler = promoHandler;

    renderHead = renderHead;
    renderPreview = renderPreview;
    renderFoot = renderFoot;

    renderMain = renderMain;
    renderPromo = renderPromo;

    componentWillUnmount(): void {
        if (this.promoTimerId) {
            clearTimeout(this.promoTimerId);
        }
    }

    render() {
        const { isPromoShow, isPromoForceShow } = this.state;
        const { prize } = this.props;

        return (
            <div
                ref={this.parent}
                className={`prize _FULL _${prize.status} ${isPromoShow ? '_promoShow' : ''} ${isPromoForceShow ? '_promoForceShow' : ''}`}
            >
                {this.renderMain()}
                {this.renderPromo()}
            </div>
        );
    }
}

export default Prize;
