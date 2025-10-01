import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import send from './methods/send.ts';

import LosvillPopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderFields from './renders/renderFields.tsx';

class LosvillPopup
    extends Popup<LosvillPopupI['props'], LosvillPopupI['state']>
    implements LosvillPopupI
{
    parent: LosvillPopupI['parent'];

    constructor(props: LosvillPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    popupName = 'losvillPopup' as const;
    name = 'form';
    savedName = 'savedform';

    send = send;

    renderContent = renderContent;
    renderFields = renderFields;

    componentDidMount(): void {
        super.componentDidMount();

        this.init({ fields: {}, start: true });
    }

    render() {
        return this.renderPopup({
            children: this.renderContent(),
        });
    }
}

export default LosvillPopup;
