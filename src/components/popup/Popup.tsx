import React from 'react';

import EditBlock from '@components/editBlock/EditBlock.tsx';

import close from './methods/close.ts';

import PopupI from './types.ts';

import renderClose from './renders/renderClose.tsx';
import renderPopup from './renders/renderPopup.tsx';

class Popup<P = {}, S = {}>
    extends EditBlock<PopupI<P, S>['props'], PopupI<P, S>['state']>
    implements PopupI
{
    parent: PopupI<P, S>['parent'];

    constructor(props: PopupI<P, S>['props']) {
        super(props);
        this.state = {} as PopupI<P, S>['state'];

        this.parent = React.createRef();
    }

    popupName = '' as any;

    close = close;

    renderPopup = renderPopup;
    renderClose = renderClose;
    renderContent = (() => <></>) as PopupI['renderContent'];
}

export default Popup;
